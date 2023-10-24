const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const mockNodes = {
  "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4": {
    id: "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "startNode",
    name: "start",
    height: 34,
    edges: [
      {
        target_node_id: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb"
      }
    ],
    width: 85,
    processedPItems: [
      {
        transition: {
          event: "",
          id: "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4-START-EDGE",
          nodeId: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
          transitionType: "GO_TO"
        },
        processingItemsParentKey: "startTransition"
      }
    ],
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    blockHeight: 46,
    messageHeight: 0,
    x: 0,
    y: 0
  },
  "069b14b8-2789-4b7e-9986-d04357ee51ea": {
    id: "069b14b8-2789-4b7e-9986-d04357ee51ea",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "componentNode",
    name: "Call BUSINESS_contact_you",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "eb2451a9-c24d-45a7-8d16-f8d0c857ff13",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "b3c224f5-1f2c-4d96-8aa6-1c262c86822e",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "82d7dc09-de27-4264-8f81-414bcf80cc37",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 74,
    blockHeight: 46,
    x: 1620,
    y: 0,
    width: 195
  },
  "68bf6f04-7c43-4b8d-81d9-8ca903e906d1": {
    id: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "componentNode",
    name: "Call BUSINESS_disconnect_service",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "e8baf459-1414-46ea-90d2-cb9f136c10b7",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "0c3922a5-7f28-409a-8312-68a5e4e098e5",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "ab680794-5c05-43f6-a3a0-5f56c682c0f7",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 74,
    blockHeight: 46,
    hasParent: true,
    x: 1350,
    y: 996,
    width: 195
  },
  "a9ca8e2e-7a00-4f63-87b0-da3786e55baa": {
    id: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "componentNode",
    name: "Call BUSINESS_inquire_bill",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "11b98a0a-6cf8-402f-8acd-8850ec12e87f",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "1a286430-bad3-4429-b592-c743aaa8ab03",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "03478c5e-fd7c-42d9-97b3-b8d332a8b0b4",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 74,
    blockHeight: 46,
    hasParent: true,
    x: 540,
    y: 996,
    width: 195
  },
  "f24c092f-b017-4ad0-b58e-27271cf86710": {
    id: "f24c092f-b017-4ad0-b58e-27271cf86710",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "componentNode",
    name: "Call BUSINESS_report_emergency_01",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "c4590673-eb82-4a48-b291-af69cc54d91b",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "66e799ac-36b4-4472-901f-53408ac3cddf",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "4d7ce286-e021-422d-a15b-c17203c91e06",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 74,
    blockHeight: 46,
    hasParent: true,
    x: 810,
    y: 996,
    width: 195
  },
  "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb": {
    id: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "componentNode",
    hasParent: true,
    name: "Call COMPONENT_get_state_20",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "3abcf577-2346-4be1-9cb4-ea0aac6ac29f",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "f087be31-7a51-4ba3-a57c-fab5f8c99559",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "b34af375-b70f-4dce-90b7-94ab915e5179",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 74,
    blockHeight: 46,
    x: 0,
    y: 149,
    width: 195
  },
  "a6770a71-74f3-4e94-be2f-b76ecbc82b45": {
    id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "decisionNode",
    name: "Check Post Answer",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
      },
      {
        target_node_id: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
      },
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "ba426947-1d4a-4ab6-9935-35328e831963",
          transitionType: "GO_TO",
          eventId: "",
          label: "Business Response",
          eventLog: "",
          nodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
        },
        id: "4c5cbd38-c892-4067-8162-2cc6cd257c71",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "98d6e9f7-ca97-40e6-8c59-dc468d13af16",
        processingItemsParentKey: "processingItems"
      },
      {
        transition: {
          id: "91231c0c-950a-47f8-9674-1095ebedb6d0",
          transitionType: "GO_TO",
          eventId: "",
          label: "Social Response",
          eventLog: "",
          nodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
        },
        id: "e13deb24-c579-4f21-96a3-c4724a28de4d",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "98d6e9f7-ca97-40e6-8c59-dc468d13af16",
        processingItemsParentKey: "processingItems"
      },
      {
        transition: {
          id: "1b0da172-1de7-4c33-8033-154985ab812c",
          transitionType: "GO_TO",
          eventId: "",
          label: "Else",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "b95189b0-459e-4569-b8da-8f10a8614d91",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "98d6e9f7-ca97-40e6-8c59-dc468d13af16",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 0,
    height: 130,
    blockHeight: 46,
    hasParent: true,
    x: 0,
    y: 680,
    width: 195
  },
  "59c925f7-494e-458d-9362-be655a99630c": {
    id: "59c925f7-494e-458d-9362-be655a99630c",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [
      {
        id: "d56f59a7-4ed4-470d-ba44-e1e98b297661",
        eventId: "f0861222-6d13-4b82-afea-2f5deac54d36",
        transition: {
          id: "fbc4c997-67ce-4309-bf54-2b09d74e1840",
          transitionType: "GO_TO",
          eventId: "",
          label: "MaxNomatch",
          eventLog: "",
          nodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
          type: "eventHandler"
        },
        reserved: true,
        transitionId: "fbc4c997-67ce-4309-bf54-2b09d74e1840",
        nodeId: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    nodeType: "recognitionNode2",
    hasParent: true,
    name: "Get_User_Intent",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
      },
      {
        target_node_id: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "824de822-ff3c-4070-86f9-b5ba959ca3fa",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo",
          eventLog: "",
          nodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
        },
        id: "26556410-846b-4ecf-a4f5-ebdfa84b7295",
        note: "",
        channelColor: null,
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "3335eebf-bc1f-44ab-a6ba-1a9620f8a2d3",
        processingItemsParentKey: "processingItemsId"
      },
      {
        eventId: "f0861222-6d13-4b82-afea-2f5deac54d36",
        transition: {
          id: "fbc4c997-67ce-4309-bf54-2b09d74e1840",
          transitionType: "GO_TO",
          eventId: "",
          label: "MaxNomatch",
          eventLog: "",
          nodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
          type: "eventHandler"
        },
        processingItemsParentKey: "eventHandler"
      }
    ],
    messageHeight: 0,
    height: 102,
    blockHeight: 46,
    x: 0,
    y: 298,
    width: 195
  },
  "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21": {
    id: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "intentmapperNode2",
    hasParent: true,
    name: "Intent Mapper",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45"
      }
    ],
    processedPItems: [
      {
        type: "mapCount",
        mapCount: 41
      },
      {
        content: {
          key: null,
          ref: null,
          props: {
            children: {
              key: null,
              ref: null,
              props: {
                children: [
                  {
                    type: {
                      attrs: [],
                      componentStyle: {
                        rules: [
                          "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
                        ],
                        staticRulesId: "",
                        isStatic: false,
                        componentId:
                          "node-utils__PortContentLabel-sc-1buktr3-1",
                        baseHash: -412407955
                      },
                      displayName: "node-utils__PortContentLabel",
                      foldedComponentIds: [],
                      styledComponentId:
                        "node-utils__PortContentLabel-sc-1buktr3-1",
                      target: "div"
                    },
                    key: null,
                    ref: null,
                    props: {
                      children: "Always"
                    },
                    _owner: null,
                    _store: {}
                  },
                  null,
                  null
                ]
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        type: "finalTransition",
        transition: {
          id: "299b5397-1646-4f98-9864-b3e2d5bd99aa",
          transitionType: "GO_TO",
          eventId: "",
          label: "Always",
          eventLog: "",
          nodeId: "a6770a71-74f3-4e94-be2f-b76ecbc82b45"
        },
        processingItemsParentKey: "intentMappingTransition"
      }
    ],
    messageHeight: 0,
    height: 102,
    blockHeight: 46,
    x: 0,
    y: 475,
    width: 195
  },
  "84060bcc-3dc5-4f2e-b2a3-f06689cc706c": {
    id: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "messageNode",
    name: "MaxNoMatch - Contact Us",
    messagePromptAssets: {
      message: {
        id: "9d0a644c-fa19-43ee-8e23-353434f3ba7a",
        name: "please_visit_our_contact_us_page_for_more_informat",
        prompts: [
          {
            payload: {
              displayText: "Please call us atcsPhonefor more information.",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [
                {
                  variable: {
                    id: "90f57212-fa05-41f0-a844-f9eaaae50d03",
                    name: "csPhone",
                    description: "",
                    possibleValues: [],
                    uiDefaultValue: "1-900-MIX-ALOT",
                    isReserved: false,
                    masked: false,
                    reportingType: "NOT_SET",
                    simpleVariableType: "STRING_TYPE",
                    timestamp: "2021-09-24T16:22:39.545Z"
                  },
                  type: "",
                  properties: {
                    string: "csPhone"
                  },
                  position: {
                    startIndex: 17,
                    length: 7
                  },
                  variableId: "90f57212-fa05-41f0-a844-f9eaaae50d03"
                }
              ],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
            lastModified: "2021-09-24T16:22:39.941Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2021-09-24T16:22:39.939Z"
      },
      promptText: "Please call us atcsPhonefor more information.",
      promptTags: [
        {
          variable: {
            id: "90f57212-fa05-41f0-a844-f9eaaae50d03",
            name: "csPhone",
            description: "",
            possibleValues: [],
            uiDefaultValue: "1-900-MIX-ALOT",
            isReserved: false,
            masked: false,
            reportingType: "NOT_SET",
            simpleVariableType: "STRING_TYPE",
            timestamp: "2021-09-24T16:22:39.545Z"
          },
          type: "",
          properties: {
            string: "csPhone"
          },
          position: {
            startIndex: 17,
            length: 7
          },
          variableId: "90f57212-fa05-41f0-a844-f9eaaae50d03"
        }
      ]
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "1dd8b2d6-4b8a-40cb-a265-b5f78853dc3b",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo Get_User_Intent",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "9d0e84dc-5293-42fd-be4e-ced254e6af49",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "c665bd88-c8a6-4afc-b454-2ad2350510a3",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    hasParent: true,
    x: 1080,
    y: 996,
    width: 195
  },
  "5e668ca0-eefb-46e1-baac-5a5e10868b99": {
    id: "5e668ca0-eefb-46e1-baac-5a5e10868b99",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "messageNode",
    hasParent: true,
    name: "Post Answer - Business",
    messagePromptAssets: {
      message: {
        id: "35eb54df-c677-4866-81f3-6f9aaf4de359",
        name: "post_answer_business",
        prompts: [
          {
            payload: {
              displayText: "Let me know if you have any other questions.",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
            lastModified: "2021-09-24T16:22:42.487Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2021-09-24T16:22:42.485Z"
      },
      promptText: "Let me know if you have any other questions.",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "c4e49915-3a68-435b-acdb-eab33856ae05",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo Get_User_Intent",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "46184f6b-51ff-4767-a757-3209a72ab80d",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "e8872f0f-08fe-401f-afa7-849c1cdebbed",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    x: 0,
    y: 996,
    width: 195
  },
  "2f857ac4-46f8-4636-a86f-1fcbbd1e4300": {
    id: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "messageNode",
    hasParent: true,
    name: "Post Answer - Social",
    messagePromptAssets: {
      message: {
        id: "7e8fc056-37bb-43f2-9708-3bf6946ddde9",
        name: "post_answer_social",
        prompts: [
          {
            payload: {
              displayText: "I'm here to answer questions about American Water.",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
            lastModified: "2021-09-24T16:22:42.466Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2021-09-24T16:22:42.463Z"
      },
      promptText: "I'm here to answer questions about American Water.",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "59c925f7-494e-458d-9362-be655a99630c"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "873bb9ac-bda9-4270-b599-1a0717f7bc62",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo Get_User_Intent",
          eventLog: "",
          nodeId: "59c925f7-494e-458d-9362-be655a99630c"
        },
        id: "9b936a69-8df6-40d8-9053-2a4ddfddf5d0",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "051dd5bf-a010-4ab2-b6a0-0d2366e8d8be",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    x: 270,
    y: 996,
    width: 195
  },
  "880391d6-9c94-4f54-a654-71ad7196ee02": {
    id: "880391d6-9c94-4f54-a654-71ad7196ee02",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "recognitionNode2",
    name: "QA_Max Turns",
    messagePromptAssets: {
      message: {
        id: "0b990539-31b6-47e9-ac51-697d634baeed",
        name: "i'm_sorry_for_not_understanding_perhaps_one_of_the",
        prompts: [
          {
            payload: {
              displayText:
                'I\'m sorry for not understanding. Perhaps one of these topics will be helpful:<ul><li><a classname="mixButton" href="#"  data-vtz-link-type="Dialog" data-vtz-jump="turnServiceOnOFF" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Turn Service On/Off</a></li><li><a classname="mixButton" href="#" data-vtz-link-type="Dialog" data-vtz-jump="emergency" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Emergency</a></li><li><a classname="mixButton" href="#" data-vtz-link-type="Dialog" data-vtz-jump="billingPayment" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Billing & Payment</a></li><li><a classname="mixButton" href="#"  data-vtz-link-type="Dialog" data-vtz-jump="other" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Other</a></li></ul>',
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
            lastModified: "2021-09-24T16:22:40.949Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2021-09-24T16:22:40.947Z"
      },
      promptText:
        'I\'m sorry for not understanding. Perhaps one of these topics will be helpful:<ul><li><a classname="mixButton" href="#"  data-vtz-link-type="Dialog" data-vtz-jump="turnServiceOnOFF" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Turn Service On/Off</a></li><li><a classname="mixButton" href="#" data-vtz-link-type="Dialog" data-vtz-jump="emergency" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Emergency</a></li><li><a classname="mixButton" href="#" data-vtz-link-type="Dialog" data-vtz-jump="billingPayment" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Billing & Payment</a></li><li><a classname="mixButton" href="#"  data-vtz-link-type="Dialog" data-vtz-jump="other" onclick="window.inqFrame.Application.sendVALinkClicked(event);">Other</a></li></ul>',
      promptTags: []
    },
    edges: [
      {
        target_node_id: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
      },
      {
        target_node_id: "f24c092f-b017-4ad0-b58e-27271cf86710"
      },
      {
        target_node_id: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
      },
      {
        target_node_id: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "4874d1e4-445a-44c9-a839-1b5c9d45267c",
          transitionType: "GO_TO",
          eventId: "",
          label: "billingPayment",
          eventLog: "",
          nodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
        },
        id: "318ce0e2-d35f-401f-926c-1d8c620b4617",
        note: "",
        channelColor: null,
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        type: "actionConfig",
        processingItemsParentId: "0d07e0cf-9254-4577-aa6b-761789b7ca06",
        processingItemsParentKey: "processingItemsId"
      },
      {
        transition: {
          id: "680b5588-b740-4bf4-a37c-65cd58f0f29d",
          transitionType: "GO_TO",
          eventId: "",
          label: "emergency",
          eventLog: "",
          nodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
        },
        id: "2864af01-5ee9-486a-9428-d7f1cc5b511b",
        note: "",
        channelColor: null,
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        type: "actionConfig",
        processingItemsParentId: "77388577-c730-4cae-a6ef-0676cadb65c3",
        processingItemsParentKey: "processingItemsId"
      },
      {
        transition: {
          id: "68b6ff5d-83c9-4c1e-a95c-3711f1250ef5",
          transitionType: "GO_TO",
          eventId: "",
          label: "Contact",
          eventLog: "",
          nodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
        },
        id: "bccb6398-7d18-4f47-a1f2-5768d00caad2",
        note: "",
        channelColor: null,
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        type: "actionConfig",
        processingItemsParentId: "a1da2e84-53d2-4b54-8517-9152a5a33d69",
        processingItemsParentKey: "processingItemsId"
      },
      {
        transition: {
          id: "f3c5510d-5216-4fda-8f70-bab3b7d112b7",
          transitionType: "GO_TO",
          eventId: "",
          label: "turnServiceOnOFF",
          eventLog: "",
          nodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
        },
        id: "a70dff0e-c596-4675-8cb3-da88a08b9bbf",
        note: "",
        channelColor: null,
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        type: "actionConfig",
        processingItemsParentId: "d29766f1-8a53-4e97-9832-5c44f4088c9a",
        processingItemsParentKey: "processingItemsId"
      }
    ],
    messageHeight: 83,
    height: 241,
    blockHeight: 129,
    hasParent: true,
    x: 540,
    y: 680,
    width: 195
  },
  "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8": {
    id: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
    parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
    eventHandlers: [],
    nodeType: "controllerNode",
    hasParent: true,
    name: "QR_MaxTurns",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "880391d6-9c94-4f54-a654-71ad7196ee02"
      }
    ],
    processedPItems: [
      {
        content: "INCOMP_OPTIONS",
        type: "concept",
        transition: {
          id: "1e4ff299-a06c-4bba-a0bf-9c51a6c82192",
          nodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
          transitionType: "GO_TO",
          conceptId: "8dbf43bb-44ad-4f3c-9d69-e7d1427c41de"
        },
        processingItemsParentKey: "concepts"
      },
      {
        id: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
        actionParams: {
          sourceNodeType: "controllerNode"
        },
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: [
                      "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
                    ],
                    staticRulesId: "",
                    isStatic: false,
                    componentId: "node-utils__PortContentLabel-sc-1buktr3-1",
                    baseHash: -412407955
                  },
                  displayName: "node-utils__PortContentLabel",
                  foldedComponentIds: [],
                  styledComponentId:
                    "node-utils__PortContentLabel-sc-1buktr3-1",
                  target: "div"
                },
                key: null,
                ref: null,
                props: {
                  children: "Intent Switch"
                },
                _owner: null,
                _store: {}
              },
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: ["float:right"],
                    staticRulesId: "",
                    isStatic: false,
                    componentId:
                      "node-utils___StyledTransitionIcon2-sc-1buktr3-12",
                    baseHash: 1255610387,
                    baseStyle: {
                      rules: ["float:right;"],
                      staticRulesId: "",
                      isStatic: false,
                      componentId: "node-utils__TransitionIcon-sc-1buktr3-2",
                      baseHash: -515599044
                    }
                  },
                  displayName: "node-utils___StyledTransitionIcon2",
                  foldedComponentIds: [
                    "node-utils__TransitionIcon-sc-1buktr3-2"
                  ],
                  styledComponentId:
                    "node-utils___StyledTransitionIcon2-sc-1buktr3-12"
                },
                key: null,
                ref: null,
                props: {
                  fontName: "IntentMapperNode"
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        },
        disableLabelEdit: true,
        transition: {
          id: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
          transitionType: "RETURN_TO_INTENT_MAPPER",
          eventId: "",
          label: "Intent Switch",
          eventLog: ""
        },
        processingItemsParentId: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
        processingItemsParentKey: "intentSwitchTransition",
        type: "intentSwitch"
      },
      {
        transition: {
          id: "a9c9223e-6ef6-40a7-99f9-b85aebee91c1",
          transitionType: "RETURN_TO_INTENT_MAPPER",
          eventId: "",
          label: "Return to Mapper",
          eventLog: ""
        },
        id: "5d150af5-f74e-4a37-a95e-b9f454af44df",
        note: "",
        channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
        processingItemsParentId: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
        processingItemsParentKey: "finalTransitionId",
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: [
                      "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
                    ],
                    staticRulesId: "",
                    isStatic: false,
                    componentId: "node-utils__PortContentLabel-sc-1buktr3-1",
                    baseHash: -412407955
                  },
                  displayName: "node-utils__PortContentLabel",
                  foldedComponentIds: [],
                  styledComponentId:
                    "node-utils__PortContentLabel-sc-1buktr3-1",
                  target: "div"
                },
                key: null,
                ref: null,
                props: {
                  children: "Return to Mapper"
                },
                _owner: null,
                _store: {}
              },
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: ["float:right"],
                    staticRulesId: "",
                    isStatic: false,
                    componentId:
                      "node-utils___StyledTransitionIcon5-sc-1buktr3-9",
                    baseHash: 464121134,
                    baseStyle: {
                      rules: ["float:right;"],
                      staticRulesId: "",
                      isStatic: false,
                      componentId: "node-utils__TransitionIcon-sc-1buktr3-2",
                      baseHash: -515599044
                    }
                  },
                  displayName: "node-utils___StyledTransitionIcon5",
                  foldedComponentIds: [
                    "node-utils__TransitionIcon-sc-1buktr3-2"
                  ],
                  styledComponentId:
                    "node-utils___StyledTransitionIcon5-sc-1buktr3-9"
                },
                key: null,
                ref: null,
                props: {
                  fontName: "IntentMapperNode"
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        },
        node: {
          id: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
          parentComponentId: "2d821634-620b-4ae7-bf17-dfcb4b098a5e",
          controllerNode: {
            name: "QR_MaxTurns",
            description: "",
            initialTransition: {
              id: "216549a5-b0cc-42c3-8587-82a2360c0998",
              channelProcessingItemsMap: {
                "2604a693-d762-4df1-8b31-6b7fecf3ddb1": {
                  processingItems: []
                }
              },
              lastModified: "2021-09-24T16:22:55.828Z",
              parentNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
            },
            finalTransition: {
              id: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
              channelProcessingItemsMap: {
                "2604a693-d762-4df1-8b31-6b7fecf3ddb1": {
                  processingItems: [
                    {
                      transition: {
                        id: "a9c9223e-6ef6-40a7-99f9-b85aebee91c1",
                        transitionType: "RETURN_TO_INTENT_MAPPER",
                        eventId: "",
                        label: "Return to Mapper",
                        eventLog: ""
                      },
                      id: "5d150af5-f74e-4a37-a95e-b9f454af44df",
                      note: ""
                    }
                  ]
                }
              },
              lastModified: "2021-09-24T16:22:55.828Z",
              parentNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
            },
            concepts: [
              {
                conceptId: "8dbf43bb-44ad-4f3c-9d69-e7d1427c41de",
                collectGotoNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
                processGotoNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              }
            ],
            intentSwitchingDisabled: false,
            intentSwitchTransition: {
              id: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
              transitionType: "RETURN_TO_INTENT_MAPPER",
              eventId: "",
              label: "Intent Switch",
              eventLog: ""
            },
            intentSwitchTransitionId: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
            initialTransitionId: "216549a5-b0cc-42c3-8587-82a2360c0998",
            finalTransitionId: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
            timestamp: "2021-09-24T16:22:57.828Z"
          },
          eventHandlers: [],
          nodeProperties: {
            name: "QR_MaxTurns",
            description: "",
            initialTransition: {
              id: "216549a5-b0cc-42c3-8587-82a2360c0998",
              channelProcessingItemsMap: {
                "2604a693-d762-4df1-8b31-6b7fecf3ddb1": {
                  processingItems: []
                }
              },
              lastModified: "2021-09-24T16:22:55.828Z",
              parentNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
            },
            finalTransition: {
              id: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
              channelProcessingItemsMap: {
                "2604a693-d762-4df1-8b31-6b7fecf3ddb1": {
                  processingItems: [
                    {
                      transition: {
                        id: "a9c9223e-6ef6-40a7-99f9-b85aebee91c1",
                        transitionType: "RETURN_TO_INTENT_MAPPER",
                        eventId: "",
                        label: "Return to Mapper",
                        eventLog: ""
                      },
                      id: "5d150af5-f74e-4a37-a95e-b9f454af44df",
                      note: ""
                    }
                  ]
                }
              },
              lastModified: "2021-09-24T16:22:55.828Z",
              parentNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
            },
            concepts: [
              {
                conceptId: "8dbf43bb-44ad-4f3c-9d69-e7d1427c41de",
                collectGotoNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
                processGotoNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              }
            ],
            intentSwitchingDisabled: false,
            intentSwitchTransition: {
              id: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
              transitionType: "RETURN_TO_INTENT_MAPPER",
              eventId: "",
              label: "Intent Switch",
              eventLog: ""
            },
            intentSwitchTransitionId: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
            initialTransitionId: "216549a5-b0cc-42c3-8587-82a2360c0998",
            finalTransitionId: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
            timestamp: "2021-09-24T16:22:57.828Z"
          },
          nodeType: "controllerNode",
          hasParent: true,
          processingItems: [
            {
              transition: {
                id: "ea849902-db22-4d11-87f1-e357f8114ebc",
                nodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
                transitionType: "GO_TO",
                conceptId: "8dbf43bb-44ad-4f3c-9d69-e7d1427c41de"
              },
              processingItemsParentKey: "concepts"
            },
            {
              transition: {
                id: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
                transitionType: "RETURN_TO_INTENT_MAPPER",
                eventId: "",
                label: "Intent Switch",
                eventLog: ""
              },
              processingItemsParentId: "a7a1f145-e96f-4fca-a203-dbb9ab1bcbc5",
              processingItemsParentKey: "intentSwitchTransition"
            },
            {
              transition: {
                id: "a9c9223e-6ef6-40a7-99f9-b85aebee91c1",
                transitionType: "RETURN_TO_INTENT_MAPPER",
                eventId: "",
                label: "Return to Mapper",
                eventLog: ""
              },
              id: "5d150af5-f74e-4a37-a95e-b9f454af44df",
              note: "",
              channelId: "2604a693-d762-4df1-8b31-6b7fecf3ddb1",
              processingItemsParentId: "06e1f0b7-b167-4ef0-bef8-20b682984c25",
              processingItemsParentKey: "finalTransitionId"
            }
          ]
        },
        nodeType: "controllerNode",
        type: "finalTransition"
      }
    ],
    messageHeight: 0,
    height: 130,
    blockHeight: 46,
    x: 540,
    y: 475,
    width: 195
  }
};

export const mockEdges = {
  "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4-START-EDGE": {
    node: "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4",
    pItem: {
      event: "",
      id: "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4-START-EDGE",
      nodeId: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
      transitionType: "GO_TO",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "down",
      direction: "center",
      end: {
        id: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
        height: 74,
        width: 195,
        x: 0,
        y: 149,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "ddbee5a1-d5fa-4cf7-93d6-1d0335dec8e4",
        height: 34,
        width: 85,
        x: 0,
        y: 0,
        edges: [
          {
            targetNodeId: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb"
          }
        ]
      }
    },
    course: "down",
    start: {
      x: 42.5,
      y: 34
    },
    end: {
      x: 42.5,
      y: 143
    },
    column1: 42.5,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "eb2451a9-c24d-45a7-8d16-f8d0c857ff13": {
    node: "069b14b8-2789-4b7e-9986-d04357ee51ea",
    pItem: {
      id: "eb2451a9-c24d-45a7-8d16-f8d0c857ff13",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-left-down",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "069b14b8-2789-4b7e-9986-d04357ee51ea",
        height: 74,
        width: 195,
        x: 1620,
        y: 0,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-down-left-down",
    start: {
      x: 1617,
      y: 57
    },
    end: {
      x: 94,
      y: 292
    },
    column1: 1573,
    column2: 101,
    row1: 257,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "3abcf577-2346-4be1-9cb4-ea0aac6ac29f": {
    node: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
    pItem: {
      id: "3abcf577-2346-4be1-9cb4-ea0aac6ac29f",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "7207cc5c-60b6-42b0-9d82-ce42f65e4ddb",
        height: 74,
        width: 195,
        x: 0,
        y: 149,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 206
    },
    end: {
      x: -26,
      y: 319.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "824de822-ff3c-4070-86f9-b5ba959ca3fa": {
    node: "59c925f7-494e-458d-9362-be655a99630c",
    pItem: {
      id: "824de822-ff3c-4070-86f9-b5ba959ca3fa",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo",
      eventLog: "",
      nodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21",
        height: 102,
        width: 195,
        x: 0,
        y: 475,
        edges: [
          {
            targetNodeId: "a6770a71-74f3-4e94-be2f-b76ecbc82b45"
          }
        ]
      },
      start: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 355
    },
    end: {
      x: -26,
      y: 496.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "fbc4c997-67ce-4309-bf54-2b09d74e1840": {
    node: "59c925f7-494e-458d-9362-be655a99630c",
    pItem: {
      id: "fbc4c997-67ce-4309-bf54-2b09d74e1840",
      transitionType: "GO_TO",
      eventId: "",
      label: "MaxNomatch",
      eventLog: "",
      nodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
      type: "eventHandler",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right-down",
      direction: "right",
      end: {
        id: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
        height: 130,
        width: 195,
        x: 540,
        y: 475,
        edges: [
          {
            targetNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02"
          }
        ]
      },
      start: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      }
    },
    course: "right-down-right-down",
    start: {
      x: 198,
      y: 383
    },
    end: {
      x: 641,
      y: 469
    },
    column1: 216,
    column2: 634,
    row1: 434,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "299b5397-1646-4f98-9864-b3e2d5bd99aa": {
    node: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21",
    pItem: {
      id: "299b5397-1646-4f98-9864-b3e2d5bd99aa",
      transitionType: "GO_TO",
      eventId: "",
      label: "Always",
      eventLog: "",
      nodeId: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
        height: 130,
        width: 195,
        x: 0,
        y: 680,
        edges: [
          {
            targetNodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
          },
          {
            targetNodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
          },
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21",
        height: 102,
        width: 195,
        x: 0,
        y: 475,
        edges: [
          {
            targetNodeId: "a6770a71-74f3-4e94-be2f-b76ecbc82b45"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 560
    },
    end: {
      x: -26,
      y: 701.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "1e4ff299-a06c-4bba-a0bf-9c51a6c82192": {
    node: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
    pItem: {
      id: "1e4ff299-a06c-4bba-a0bf-9c51a6c82192",
      nodeId: "880391d6-9c94-4f54-a654-71ad7196ee02",
      transitionType: "GO_TO",
      conceptId: "8dbf43bb-44ad-4f3c-9d69-e7d1427c41de",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "880391d6-9c94-4f54-a654-71ad7196ee02",
        height: 241,
        width: 195,
        x: 540,
        y: 680,
        edges: [
          {
            targetNodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
          },
          {
            targetNodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
          },
          {
            targetNodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
          },
          {
            targetNodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
          }
        ]
      },
      start: {
        id: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8",
        height: 130,
        width: 195,
        x: 540,
        y: 475,
        edges: [
          {
            targetNodeId: "880391d6-9c94-4f54-a654-71ad7196ee02"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: 537,
      y: 532
    },
    end: {
      x: 514,
      y: 701.5
    },
    column1: 493,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "ba426947-1d4a-4ab6-9935-35328e831963": {
    node: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
    pItem: {
      id: "ba426947-1d4a-4ab6-9935-35328e831963",
      transitionType: "GO_TO",
      eventId: "",
      label: "Business Response",
      eventLog: "",
      nodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "5e668ca0-eefb-46e1-baac-5a5e10868b99",
        height: 157,
        width: 195,
        x: 0,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
        height: 130,
        width: 195,
        x: 0,
        y: 680,
        edges: [
          {
            targetNodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
          },
          {
            targetNodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
          },
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 737
    },
    end: {
      x: -26,
      y: 1017.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "91231c0c-950a-47f8-9674-1095ebedb6d0": {
    node: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
    pItem: {
      id: "91231c0c-950a-47f8-9674-1095ebedb6d0",
      transitionType: "GO_TO",
      eventId: "",
      label: "Social Response",
      eventLog: "",
      nodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right",
      direction: "right",
      end: {
        id: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300",
        height: 157,
        width: 195,
        x: 270,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
        height: 130,
        width: 195,
        x: 0,
        y: 680,
        edges: [
          {
            targetNodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
          },
          {
            targetNodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
          },
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "right-down-right",
    start: {
      x: 198,
      y: 765
    },
    end: {
      x: 244,
      y: 1017.5
    },
    column1: 216,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "1b0da172-1de7-4c33-8033-154985ab812c": {
    node: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
    pItem: {
      id: "1b0da172-1de7-4c33-8033-154985ab812c",
      transitionType: "GO_TO",
      eventId: "",
      label: "Else",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 2,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-right",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "a6770a71-74f3-4e94-be2f-b76ecbc82b45",
        height: 130,
        width: 195,
        x: 0,
        y: 680,
        edges: [
          {
            targetNodeId: "5e668ca0-eefb-46e1-baac-5a5e10868b99"
          },
          {
            targetNodeId: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300"
          },
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-right",
    start: {
      x: -3,
      y: 793
    },
    end: {
      x: -26,
      y: 319.5
    },
    column1: -47,
    column1Offset: 2,
    column2Offset: 0,
    row1Offset: 0
  },
  "4874d1e4-445a-44c9-a839-1b5c9d45267c": {
    node: "880391d6-9c94-4f54-a654-71ad7196ee02",
    pItem: {
      id: "4874d1e4-445a-44c9-a839-1b5c9d45267c",
      transitionType: "GO_TO",
      eventId: "",
      label: "billingPayment",
      eventLog: "",
      nodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa",
        height: 74,
        width: 195,
        x: 540,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "880391d6-9c94-4f54-a654-71ad7196ee02",
        height: 241,
        width: 195,
        x: 540,
        y: 680,
        edges: [
          {
            targetNodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
          },
          {
            targetNodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
          },
          {
            targetNodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
          },
          {
            targetNodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: 537,
      y: 820
    },
    end: {
      x: 514,
      y: 1017.5
    },
    column1: 493,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "680b5588-b740-4bf4-a37c-65cd58f0f29d": {
    node: "880391d6-9c94-4f54-a654-71ad7196ee02",
    pItem: {
      id: "680b5588-b740-4bf4-a37c-65cd58f0f29d",
      transitionType: "GO_TO",
      eventId: "",
      label: "emergency",
      eventLog: "",
      nodeId: "f24c092f-b017-4ad0-b58e-27271cf86710",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right",
      direction: "right",
      end: {
        id: "f24c092f-b017-4ad0-b58e-27271cf86710",
        height: 74,
        width: 195,
        x: 810,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "880391d6-9c94-4f54-a654-71ad7196ee02",
        height: 241,
        width: 195,
        x: 540,
        y: 680,
        edges: [
          {
            targetNodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
          },
          {
            targetNodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
          },
          {
            targetNodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
          },
          {
            targetNodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
          }
        ]
      }
    },
    course: "right-down-right",
    start: {
      x: 738,
      y: 848
    },
    end: {
      x: 784,
      y: 1017.5
    },
    column1: 756,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "68b6ff5d-83c9-4c1e-a95c-3711f1250ef5": {
    node: "880391d6-9c94-4f54-a654-71ad7196ee02",
    pItem: {
      id: "68b6ff5d-83c9-4c1e-a95c-3711f1250ef5",
      transitionType: "GO_TO",
      eventId: "",
      label: "Contact",
      eventLog: "",
      nodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c",
      column1Offset: 1,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right-down",
      direction: "right",
      end: {
        id: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c",
        height: 157,
        width: 195,
        x: 1080,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "880391d6-9c94-4f54-a654-71ad7196ee02",
        height: 241,
        width: 195,
        x: 540,
        y: 680,
        edges: [
          {
            targetNodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
          },
          {
            targetNodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
          },
          {
            targetNodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
          },
          {
            targetNodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
          }
        ]
      }
    },
    course: "right-down-right-down",
    start: {
      x: 738,
      y: 876
    },
    end: {
      x: 1181,
      y: 990
    },
    column1: 756,
    column2: 1174,
    row1: 955,
    column1Offset: -1,
    column2Offset: 0,
    row1Offset: 0
  },
  "f3c5510d-5216-4fda-8f70-bab3b7d112b7": {
    node: "880391d6-9c94-4f54-a654-71ad7196ee02",
    pItem: {
      id: "f3c5510d-5216-4fda-8f70-bab3b7d112b7",
      transitionType: "GO_TO",
      eventId: "",
      label: "turnServiceOnOFF",
      eventLog: "",
      nodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1",
      column1Offset: 2,
      column2Offset: 0,
      horizOffset: 1,
      course: "right-down-right-down",
      direction: "right",
      end: {
        id: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1",
        height: 74,
        width: 195,
        x: 1350,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      },
      start: {
        id: "880391d6-9c94-4f54-a654-71ad7196ee02",
        height: 241,
        width: 195,
        x: 540,
        y: 680,
        edges: [
          {
            targetNodeId: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa"
          },
          {
            targetNodeId: "f24c092f-b017-4ad0-b58e-27271cf86710"
          },
          {
            targetNodeId: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c"
          },
          {
            targetNodeId: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1"
          }
        ]
      }
    },
    course: "right-down-right-down",
    start: {
      x: 738,
      y: 904
    },
    end: {
      x: 1451,
      y: 990
    },
    column1: 756,
    column2: 1444,
    row1: 955,
    column1Offset: -2,
    column2Offset: 0,
    row1Offset: -1
  },
  "c4e49915-3a68-435b-acdb-eab33856ae05": {
    node: "5e668ca0-eefb-46e1-baac-5a5e10868b99",
    pItem: {
      id: "c4e49915-3a68-435b-acdb-eab33856ae05",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo Get_User_Intent",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 2,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-right",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "5e668ca0-eefb-46e1-baac-5a5e10868b99",
        height: 157,
        width: 195,
        x: 0,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-right",
    start: {
      x: -3,
      y: 1136
    },
    end: {
      x: -26,
      y: 319.5
    },
    column1: -47,
    column1Offset: 2,
    column2Offset: 0,
    row1Offset: 0
  },
  "873bb9ac-bda9-4270-b599-1a0717f7bc62": {
    node: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300",
    pItem: {
      id: "873bb9ac-bda9-4270-b599-1a0717f7bc62",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo Get_User_Intent",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-left",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "2f857ac4-46f8-4636-a86f-1fcbbd1e4300",
        height: 157,
        width: 195,
        x: 270,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-left",
    start: {
      x: 267,
      y: 1136
    },
    end: {
      x: 201,
      y: 319.5
    },
    column1: 223,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "11b98a0a-6cf8-402f-8acd-8850ec12e87f": {
    node: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa",
    pItem: {
      id: "11b98a0a-6cf8-402f-8acd-8850ec12e87f",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 1,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-left-up-left",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "a9ca8e2e-7a00-4f63-87b0-da3786e55baa",
        height: 74,
        width: 195,
        x: 540,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-left-up-left",
    start: {
      x: 537,
      y: 1053
    },
    end: {
      x: 201,
      y: 319.5
    },
    column1: 493,
    column2: 236,
    row1: 962,
    column1Offset: 1,
    column2Offset: 0,
    row1Offset: 0
  },
  "c4590673-eb82-4a48-b291-af69cc54d91b": {
    node: "f24c092f-b017-4ad0-b58e-27271cf86710",
    pItem: {
      id: "c4590673-eb82-4a48-b291-af69cc54d91b",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 1,
      horizOffset: 1,
      course: "left-up-left-up-left",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "f24c092f-b017-4ad0-b58e-27271cf86710",
        height: 74,
        width: 195,
        x: 810,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-left-up-left",
    start: {
      x: 807,
      y: 1053
    },
    end: {
      x: 201,
      y: 319.5
    },
    column1: 763,
    column2: 236,
    row1: 962,
    column1Offset: 0,
    column2Offset: 1,
    row1Offset: 1
  },
  "1dd8b2d6-4b8a-40cb-a265-b5f78853dc3b": {
    node: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c",
    pItem: {
      id: "1dd8b2d6-4b8a-40cb-a265-b5f78853dc3b",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo Get_User_Intent",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 2,
      horizOffset: 2,
      course: "left-up-left-up-left",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "84060bcc-3dc5-4f2e-b2a3-f06689cc706c",
        height: 157,
        width: 195,
        x: 1080,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-left-up-left",
    start: {
      x: 1077,
      y: 1136
    },
    end: {
      x: 201,
      y: 319.5
    },
    column1: 1033,
    column2: 236,
    row1: 962,
    column1Offset: 0,
    column2Offset: 2,
    row1Offset: 2
  },
  "e8baf459-1414-46ea-90d2-cb9f136c10b7": {
    node: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1",
    pItem: {
      id: "e8baf459-1414-46ea-90d2-cb9f136c10b7",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "59c925f7-494e-458d-9362-be655a99630c",
      column1Offset: 0,
      column2Offset: 3,
      horizOffset: 2,
      course: "left-up-left-up-left",
      direction: "left",
      end: {
        id: "59c925f7-494e-458d-9362-be655a99630c",
        height: 102,
        width: 195,
        x: 0,
        y: 298,
        edges: [
          {
            targetNodeId: "f9ebc6ce-64c0-4e1a-b2fc-36042126cd21"
          },
          {
            targetNodeId: "9b301b5a-07d2-4863-9a8a-0a6ebf130fb8"
          }
        ]
      },
      start: {
        id: "68bf6f04-7c43-4b8d-81d9-8ca903e906d1",
        height: 74,
        width: 195,
        x: 1350,
        y: 996,
        edges: [
          {
            targetNodeId: "59c925f7-494e-458d-9362-be655a99630c"
          }
        ]
      }
    },
    course: "left-up-left-up-left",
    start: {
      x: 1347,
      y: 1053
    },
    end: {
      x: 201,
      y: 319.5
    },
    column1: 1303,
    column2: 236,
    row1: 962,
    column1Offset: 0,
    column2Offset: 3,
    row1Offset: 2
  }
};
