import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { TreeService, DataService, PublicDataService } from '../../services';
import { IeventData } from '../../interfaces';

import * as _ from 'lodash-es';
import { map, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  data: any;
  public questionStream$ = new Subject<any>();
  // tslint:disable-next-line:variable-name
  private _formData$ = new BehaviorSubject<IeventData>(undefined);
  public readonly formData$: Observable<IeventData> = this._formData$
    .asObservable().pipe(skipWhile(data => data === undefined || data === null));

  // tslint:disable-next-line:variable-name
  public _resourceAddition$ = new Subject<any>();
  public readonly resourceAddition$: Observable<any> = this._resourceAddition$
    .asObservable().pipe(skipWhile(data => data === undefined || data === null));

  constructor(public treeService: TreeService, private dataService: DataService, private publicDataService: PublicDataService) { }

  emitSelectedNodeMetaData(data: IeventData) {
    this._formData$.next(data);
  }

  emitResourceAddition(data) {
    this._resourceAddition$.next(data);
  }

  fetchCollectionHierarchy(data): Observable<any> {
    const hierarchyUrl = 'content/v3/hierarchy/' + data.collectionId;
    const req = {
      url: hierarchyUrl,
      param: { mode: 'edit' }
    };
    return this.publicDataService.get(req);
  }

  updateHierarchy(): Observable<any> {
    const req = {
      url: 'content/v3/hierarchy/update',
      data: {
        request: {
          data: {
            ...this.getCollectionHierarchy(),
            ...{lastUpdatedBy: 'b8d50233-5a4d-4a8c-9686-9c8bccd2c448'}
          }
        }
      }
    };
    return this.dataService.patch(req);
  }

  public getQuestionStream$() {
    return this.questionStream$;
  }

  public publish(value: any) {
    this.questionStream$.next(value);
  }

  getCollectionHierarchy() {
    const instance = this;
    this.data = {};
    const data = this.treeService.getFirstChild();
    return {
      nodesModified: this.treeService.treeCache.nodesModified,
      hierarchy: instance._toFlatObj(data)
    };
  }

  _toFlatObj(data) {
    const instance = this;
    if (data && data.data) {
      instance.data[data.data.id] = {
        name: data.title,
        contentType: data.data.objectType,
        children: _.map(data.children, (child) => {
          return child.data.id;
        }),
        root: data.data.root
      };

      _.forEach(data.children, (collection) => {
        instance._toFlatObj(collection);
      });
    }

    return instance.data;
  }
}
