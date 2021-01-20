export const formConfig = [
  {
    name: 'First Section',
    fields: [
      {
        code: 'name',
        dataType: 'text',
        description: 'Name of the content',
        editable: true,
        inputType: 'text',
        label: 'Title',
        name: 'Title',
        placeholder: 'Title',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
        validations: [{
          type: 'max',
          value: '120',
          message: 'Input is Exceeded'
        }, {
          type: 'required',
          message: 'Title is required'
        }]
      },
      {
        code: 'description',
        dataType: 'text',
        description: 'Description of the content',
        default: 'asdadad',
        editable: true,
        inputType: 'textarea',
        label: 'Description',
        name: 'Description',
        placeholder: 'Description',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
        validations: [{
          type: 'max',
          value: '120',
          message: 'Input is Exceeded'
        }, {
          type: 'required',
          message: 'Title is required'
        }]
      },
      {
        code: 'keywords',
        visible: true,
        editable: true,
        dataType: 'list',
        default: ['one', 'two'],
        name: 'Keywords',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        index: 3,
        description: 'Keywords for the content',
        inputType: 'keywords',
        label: 'keywords',
        placeholder: 'Enter Keywords',
        required: false,
        validations: [{
          type: 'required',
          message: 'Keyword is required'
        }]
      }
    ]
  },
  {
    name: 'Second Section',
    fields: [
      {
        code: 'primaryCategory',
        dataType: 'text',
        description: 'Type',
        editable: false,
        index: 4,
        renderingHints: {

        },
        range: [
          {
            label: 'karnataka1',
            value: 'karnataka1'
          },
          {
            label: 'karnataka2',
            value: 'karnataka2'
          }
        ],
        inputType: 'select',
        label: 'Type',
        name: 'Type',
        placeholder: '',
        required: true,
        visible: true,
        validations: [{
          type: 'required',
          message: 'Board is required'
        }]
      },
      {
        code: 'additionalCategories',
        dataType: 'list',
        depends: ['primaryCategory'],
        description: 'Additonal Category of the Content',
        editable: true,
        index: 5,
        default: ['Classroom Teaching Video',
          'Concept Map'
        ],
        inputType: 'nestedselect',
        label: 'Additional Category',
        name: 'Additional Category',
        placeholder: 'Select Additional Category',
        renderingHints: {

        },
        range: ['Classroom Teaching Video',
          'Concept Map',
          'Curiosity Question Set',
          'Experiential Resource',
          'Explanation Video',
          'Focus Spot',
          'Learning Outcome Definition',
          'Lesson Plan',
          'Marking Scheme Rubric',
          'Pedagogy Flow',
          'Previous Board Exam Papers',
          'TV Lesson',
          'Textbook'
        ],
        required: false,
        visible: true
      }
    ]
  },
  {
    name: 'Organisation Framework Terms',
    fields: [
      {
        code: 'boardIds',
        default: 'State (Gujarat)',
        visible: true,
        depends: [],
        editable: true,
        dataType: 'text',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: 'Board',
        index: 6,
        label: 'Board/Syllabus',
        required: true,
        name: 'Board/Syllabus',
        inputType: 'select',
        placeholder: 'Select Board/Syllabus',
        validations: [{
          type: 'required',
          message: 'Board is required'
        }],
        range : ['State (Gujarat)']
      },
      {
        code: 'mediumIds',
        visible: true,
        depends: ['boardIds'],
        editable: true,
        default: 'Hindi',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: '',
        index: 7,
        label: 'Medium',
        required: true,
        name: 'Medium',
        inputType: 'select',
        placeholder: 'Select Medium',
        validations: [{
          type: 'required',
          message: 'Medium is required'
        }],
        range : ['Hindi']
      },
      {
        code: 'gradeLevelIds',
        visible: true,
        depends: ['boardIds', 'mediumIds'],
        editable: true,
        default: 'Grade 12',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: 'Class',
        index: 8,
        label: 'Class',
        required: true,
        name: 'Class',
        inputType: 'select',
        placeholder: 'Select Class',
        range : ['Grade 12']
      },
      {
        code: 'subjectIds',
        visible: true,
        depends: ['boardIds', 'mediumIds', 'gradeLevelIds'],
        editable: true,
        default: 'English',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: '',
        index: 9,
        label: 'Subject',
        required: true,
        name: 'Subject',
        inputType: 'select',
        placeholder: 'Select Subject',
        range : ['English']
      },
      {
        code: 'topicsIds',
        visible: true,
        depends: ['boardIds', 'mediumIds', 'gradeLevelIds', 'subjectIds'],
        editable: true,
        dataType: 'list',
        default: ['ONE', 'TWO'],
        renderingHints: {},
        name: 'Topic',
        description: 'Choose a Topics',
        index: 11,
        inputType: 'topicselector',
        label: 'Topics',
        placeholder: 'Choose Topics',
        required: false,
        range: [
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_1',
            code: 'environmentalstudies_l1Con_1',
            translations: null,
            name: 'Nature Around The Kids',
            description: 'Nature Around The Kids',
            index: 1,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_2',
            code: 'environmentalstudies_l1Con_2',
            children: [
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_2_l2con_1',
                code: 'environmentalstudies_l1con_2_l2con_1',
                translations: null,
                name: 'Leaves',
                description: 'Leaves',
                index: 1,
                category: 'topic',
                status: 'Live'
              }
            ],
            translations: null,
            name: 'Diversity In Plants',
            description: 'Diversity In Plants',
            index: 2,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3',
            code: 'environmentalstudies_l1Con_3',
            children: [
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_1',
                code: 'environmentalstudies_l1con_3_l2con_1',
                translations: null,
                name: 'Water',
                description: 'Water',
                index: 1,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_2',
                code: 'environmentalstudies_l1con_3_l2con_2',
                translations: null,
                name: 'Distribution Of Water Bodies',
                description: 'Distribution Of Water Bodies',
                index: 2,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_3',
                code: 'environmentalstudies_l1con_3_l2con_3',
                children: [
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_3_l3con_1',
                    code: 'environmentalstudies_l1con_3_l2con_3_l3con_1',
                    translations: null,
                    name: 'Waves',
                    description: 'Waves',
                    index: 1,
                    category: 'topic',
                    status: 'Live'
                  },
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_3_l3con_2',
                    code: 'environmentalstudies_l1con_3_l2con_3_l3con_2',
                    translations: null,
                    name: 'Tides',
                    description: 'Tides',
                    index: 2,
                    category: 'topic',
                    status: 'Live'
                  }
                ],
                translations: null,
                name: 'Ocean Circulation',
                description: 'Ocean Circulation',
                index: 3,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_4',
                code: 'environmentalstudies_l1con_3_l2con_4',
                translations: null,
                name: 'Tsunami In The Indian Ocean',
                description: 'Tsunami In The Indian Ocean',
                index: 4,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_5',
                code: 'environmentalstudies_l1con_3_l2con_5',
                translations: null,
                name: 'Ocean Currents',
                description: 'Ocean Currents',
                index: 5,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_6',
                code: 'environmentalstudies_l1con_3_l2con_6',
                translations: null,
                name: 'Water Usage',
                description: 'Water Usage',
                index: 6,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_7',
                code: 'environmentalstudies_l1con_3_l2con_7',
                translations: null,
                name: 'Sources Of Water',
                description: 'Sources Of Water',
                index: 7,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_8',
                code: 'environmentalstudies_l1con_3_l2con_8',
                children: [
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_8_l3con_1',
                    code: 'environmentalstudies_l1con_3_l2con_8_l3con_1',
                    translations: null,
                    name: 'Disappearing Trick Of Water',
                    description: 'Disappearing Trick Of Water',
                    index: 1,
                    category: 'topic',
                    status: 'Live'
                  },
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_8_l3con_2',
                    code: 'environmentalstudies_l1con_3_l2con_8_l3con_2',
                    translations: null,
                    name: 'Loss Of Water By Plants',
                    description: 'Loss Of Water By Plants',
                    index: 2,
                    category: 'topic',
                    status: 'Live'
                  },
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_8_l3con_3',
                    code: 'environmentalstudies_l1con_3_l2con_8_l3con_3',
                    translations: null,
                    name: 'How Are Clouds Formed?',
                    description: 'How Are Clouds Formed?',
                    index: 3,
                    category: 'topic',
                    status: 'Live'
                  }
                ],
                translations: null,
                name: 'Water Cycle',
                description: 'Water Cycle',
                index: 8,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_9',
                code: 'environmentalstudies_l1con_3_l2con_9',
                translations: null,
                name: 'Ocean',
                description: 'Ocean',
                index: 9,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_10',
                code: 'environmentalstudies_l1con_3_l2con_10',
                translations: null,
                name: 'Heavy Rainfall',
                description: 'Heavy Rainfall',
                index: 10,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_11',
                code: 'environmentalstudies_l1con_3_l2con_11',
                translations: null,
                name: 'Lack Of Rainfall',
                description: 'Lack Of Rainfall',
                index: 11,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_12',
                code: 'environmentalstudies_l1con_3_l2con_12',
                translations: null,
                name: 'Water Conservation',
                description: 'Water Conservation',
                index: 12,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_13',
                code: 'environmentalstudies_l1con_3_l2con_13',
                translations: null,
                name: 'Rainwater Harvesting',
                description: 'Rainwater Harvesting',
                index: 13,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_14',
                code: 'environmentalstudies_l1con_3_l2con_14',
                translations: null,
                name: 'Availability Of Water',
                description: 'Availability Of Water',
                index: 14,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_15',
                code: 'environmentalstudies_l1con_3_l2con_15',
                translations: null,
                name: 'Forms Of Water',
                description: 'Forms Of Water',
                index: 15,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_16',
                code: 'environmentalstudies_l1con_3_l2con_16',
                translations: null,
                name: 'Groundwater',
                description: 'Groundwater',
                index: 16,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_17',
                code: 'environmentalstudies_l1con_3_l2con_17',
                children: [
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_17_l3con_1',
                    code: 'environmentalstudies_l1con_3_l2con_17_l3con_1',
                    translations: null,
                    name: 'Increasing Population',
                    description: 'Increasing Population',
                    index: 1,
                    category: 'topic',
                    status: 'Live'
                  },
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_17_l3con_2',
                    code: 'environmentalstudies_l1con_3_l2con_17_l3con_2',
                    translations: null,
                    name: 'Increasing Industries',
                    description: 'Increasing Industries',
                    index: 2,
                    category: 'topic',
                    status: 'Live'
                  },
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_17_l3con_3',
                    code: 'environmentalstudies_l1con_3_l2con_17_l3con_3',
                    translations: null,
                    name: 'Agricultural Activities',
                    description: 'Agricultural Activities',
                    index: 3,
                    category: 'topic',
                    status: 'Live'
                  }
                ],
                translations: null,
                name: 'Depletion Of Water Table',
                description: 'Depletion Of Water Table',
                index: 17,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_18',
                code: 'environmentalstudies_l1con_3_l2con_18',
                translations: null,
                name: 'Distribution Of Water',
                description: 'Distribution Of Water',
                index: 18,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_19',
                code: 'environmentalstudies_l1con_3_l2con_19',
                translations: null,
                name: 'Water Management',
                description: 'Water Management',
                index: 19,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_20',
                code: 'environmentalstudies_l1con_3_l2con_20',
                children: [
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_20_l3con_1',
                    code: 'environmentalstudies_l1con_3_l2con_20_l3con_1',
                    translations: null,
                    name: 'Water-wise Habits',
                    description: 'Water-wise Habits',
                    index: 1,
                    category: 'topic',
                    status: 'Live'
                  }
                ],
                translations: null,
                name: 'Individual Responsibility',
                description: 'Individual Responsibility',
                index: 20,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_3_l2con_21',
                code: 'environmentalstudies_l1con_3_l2con_21',
                translations: null,
                name: 'Water Scarcity On Plants',
                description: 'Water Scarcity On Plants',
                index: 21,
                category: 'topic',
                status: 'Live'
              }
            ],
            translations: null,
            name: 'Water',
            description: 'Water',
            index: 3,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_4',
            code: 'environmentalstudies_l1Con_4',
            translations: null,
            name: 'School And Family',
            description: 'School And Family',
            index: 4,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_5',
            code: 'environmentalstudies_l1Con_5',
            children: [
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_5_l2con_1',
                code: 'environmentalstudies_l1con_5_l2con_1',
                translations: null,
                name: 'Home',
                description: 'Home',
                index: 1,
                category: 'topic',
                status: 'Live'
              }
            ],
            translations: null,
            name: 'House And Home',
            description: 'House And Home',
            index: 5,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_6',
            code: 'environmentalstudies_l1Con_6',
            translations: null,
            name: 'Food Habits',
            description: 'Food Habits',
            index: 6,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_7',
            code: 'environmentalstudies_l1Con_7',
            children: [
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_7_l2con_1',
                code: 'environmentalstudies_l1con_7_l2con_1',
                translations: null,
                name: 'Different Abilities',
                description: 'Different Abilities',
                index: 1,
                category: 'topic',
                status: 'Live'
              }
            ],
            translations: null,
            name: 'Creative Expression Abilities',
            description: 'Creative Expression Abilities',
            index: 7,
            category: 'topic',
            status: 'Live'
          },
          {
            identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_8',
            code: 'environmentalstudies_l1Con_8',
            children: [
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_8_l2con_1',
                code: 'environmentalstudies_l1con_8_l2con_1',
                translations: null,
                name: 'Bird Feet',
                description: 'Bird Feet',
                index: 1,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_8_l2con_2',
                code: 'environmentalstudies_l1con_8_l2con_2',
                translations: null,
                name: 'Bird Beaks',
                description: 'Bird Beaks',
                index: 2,
                category: 'topic',
                status: 'Live'
              },
              {
                identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_8_l2con_3',
                code: 'environmentalstudies_l1con_8_l2con_3',
                children: [
                  {
                    identifier: 'ekstep_ncert_k-12_topic_environmentalstudies_l1con_8_l2con_3_l3con_1',
                    code: 'environmentalstudies_l1con_8_l2con_3_l3con_1',
                    translations: null,
                    name: 'Find Out About Your Own Teeth And Write;',
                    description: 'Find Out About Your Own Teeth And Write;',
                    index: 1,
                    category: 'topic',
                    status: 'Live'
                  }
                ],
                translations: null,
                name: 'Animal Teeth',
                description: 'Animal Teeth',
                index: 3,
                category: 'topic',
                status: 'Live'
              }
            ],
            translations: null,
            name: 'Birds',
            description: 'Birds',
            index: 8,
            category: 'topic',
            status: 'Live'
          }
        ],
        validations: [{
          type: 'required',
          message: 'Topic is required'
        }]
      }
    ]
  },
  {
    name: 'Target Framework Terms',
    fields: [
      {
        code: 'targetBoardIds',
        default: 'State (Gujarat)',
        visible: true,
        depends: [],
        editable: true,
        dataType: 'text',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: 'Board',
        index: 6,
        label: 'Board/Syllabus',
        required: true,
        name: 'Board/Syllabus',
        inputType: 'select',
        placeholder: 'Select Board/Syllabus',
        validations: [{
          type: 'required',
          message: 'Board is required'
        }],
        range : ['State (Gujarat)']
      },
      {
        code: 'targetMediumIds',
        visible: true,
        depends: ['targetBoardIds'],
        editable: true,
        default: 'Hindi',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: '',
        index: 7,
        label: 'Medium',
        required: true,
        name: 'Medium',
        inputType: 'select',
        placeholder: 'Select Medium',
        validations: [{
          type: 'required',
          message: 'Medium is required'
        }],
        range : ['Hindi']
      },
      {
        code: 'targetGradeLevelIds',
        visible: true,
        depends: ['targetBoardIds', 'targetMediumIds'],
        editable: true,
        default: 'Grade 12',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: 'Class',
        index: 8,
        label: 'Class',
        required: true,
        name: 'Class',
        inputType: 'select',
        placeholder: 'Select Class',
        range : ['Grade 12']
      },
      {
        code: 'targetSubjectIds',
        visible: true,
        depends: ['targetBoardIds', 'targetMediumIds', 'targetGradeLevelIds'],
        editable: true,
        default: 'English',
        dataType: 'list',
        renderingHints: {class: 'sb-g-col-lg-1'},
        description: '',
        index: 9,
        label: 'Subject',
        required: true,
        name: 'Subject',
        inputType: 'select',
        placeholder: 'Select Subject',
        range : ['English']
      },
      {
        code: 'shuffleQuestions',
        dataType: 'text',
        description: 'Shuffle Questions',
        editable: true,
        default: '',
        index: 5,
        inputType: 'checkbox',
        label: 'Shuffle Questions',
        name: 'Shuffle Questions',
        placeholder: 'Shuffle Questions',
        renderingHints: {},
        required: false,
        visible: true
      },
      {
        code: 'showFeedback',
        dataType: 'boolean',
        description: 'Enable Feedback',
        editable: false,
        default: true,
        index: 5,
        inputType: 'checkbox',
        label: 'Enable Feedback',
        name: 'Enable Feedback',
        placeholder: 'Show Feedback',
        renderingHints: {},
        required: false,
        visible: true
      },
      {
        code: 'showQuestions',
        dataType: 'text',
        description: 'Show Questions',
        editable: true,
        index: 5,
        inputType: 'select',
        label: 'Show Questions',
        name: 'showQuestions',
        placeholder: 'Show Questions',
        renderingHints: {},
        required: false,
        visible: true,
        range: ''
      }
    ]
  },
  {
    name: 'Fourth Section',
    fields: [
      {
        code: 'author',
        dataType: 'text',
        description: 'Author of the content',
        editable: true,
        inputType: 'text',
        label: 'Author',
        name: 'Author',
        placeholder: 'Author',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
      },
      {
        code: 'attributions',
        dataType: 'text',
        description: 'Attributions',
        editable: true,
        inputType: 'text',
        label: 'Attributions',
        name: 'Attributions',
        placeholder: 'Attributions',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
      },
      {
        code: 'copyright',
        dataType: 'text',
        description: 'Copyright & year',
        editable: true,
        inputType: 'text',
        label: 'Copyright & year',
        name: 'Copyright & year',
        placeholder: 'Copyright & year',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
      },
      {
        code: 'license',
        dataType: 'text',
        description: 'license',
        editable: true,
        inputType: 'select',
        label: 'license',
        name: 'license',
        placeholder: 'Select license',
        renderingHints: {
          class: 'sb-g-col-lg-1'
        },
        required: true,
        visible: true,
        range: ''
      }
    ]
  }
];
