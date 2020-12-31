import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import * as _ from 'lodash-es';
import { map } from 'rxjs/operators';
import { TreeService } from '../tree/tree.service';
import { collectionTreeNodes } from '../../editor.config';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  data: any;
  public questionStream$ = new Subject<any>();
  constructor(public treeService: TreeService) { }


  public getQuestionSetHierarchy(identifier: string) {
    // const req = {
    //   url: `${this.configService.urlConFig.URLS.QUESTION_SET.READ_HIERARCHY}/${identifier}`,
    //   param: { mode: 'edit' }
    // };
    // return this.publicDataService.get(req).pipe(map((res: any) => _.get(res, 'result.questionSet')));
    return of(collectionTreeNodes);
  }

  public updateQuestionSetHierarchy(): Observable<any> {
    // const req = {
    //   url: this.configService.urlConFig.URLS.QUESTION_SET.UPDATE_HIERARCHY,
    //   data: {
    //     request: {
    //       data: {
    //         ...this.prepareQuestionSetHierarchy(),
    //         ...{lastUpdatedBy: this.userService.userProfile.userId}
    //       }
    //     }
    //   }
    // };
    // return this.publicDataService.patch(req);
    return of({});
  }

  public sendQuestionSetForReview(identifier: string): Observable<any> {
    // const req = {
    //   url: `${this.configService.urlConFig.URLS.QUESTION_SET.REVIEW}/${identifier}`,
    //   data: {
    //     request : {
    //         questionSet: {}
    //     }
    // }
    // };
    // return this.publicDataService.post(req);
    return of({});
  }

  public getQuestionStream$() {
    return this.questionStream$;
  }

  public publish(value: any) {
    this.questionStream$.next(value);
  }

  prepareQuestionSetHierarchy() {
    this.data = {};
    const data = this.treeService.getFirstChild();
    return {
      nodesModified: this.treeService.treeCache.nodesModified,
      hierarchy: this._toFlatObj(data)
    };
  }

  _toFlatObj(data) {
    const instance = this;
    if (data && data.data) {
      instance.data[data.data.id] = {
        name: data.data.metadata.name,
        // 'contentType': data.data.objectType,
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