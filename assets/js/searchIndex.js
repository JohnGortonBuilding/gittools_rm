
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"CommentsObjectDescriptor",
            content:"CommentsObjectDescriptor",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentsObjectDescriptor',
            title:"CommentsObjectDescriptor",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"CreateConfig",
            content:"CreateConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/CreateConfig',
            title:"CreateConfig",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"IReleaseNotesExporter",
            content:"IReleaseNotesExporter",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.ReleaseNotes/IReleaseNotesExporter',
            title:"IReleaseNotesExporter",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"ExportConfig",
            content:"ExportConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ExportConfig',
            title:"ExportConfig",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"Config",
            content:"Config",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/Config',
            title:"Config",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"PublishCommand",
            content:"PublishCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/PublishCommand',
            title:"PublishCommand",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"LabelConfig",
            content:"LabelConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/LabelConfig',
            title:"LabelConfig",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"ClipBoardHelper",
            content:"ClipBoardHelper",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ClipBoardHelper',
            title:"ClipBoardHelper",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"RateLimit",
            content:"RateLimit",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/RateLimit',
            title:"RateLimit",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"ReleaseAssetUpload",
            content:"ReleaseAssetUpload",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/ReleaseAssetUpload',
            title:"ReleaseAssetUpload",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"DiscardSubOptions",
            content:"DiscardSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/DiscardSubOptions',
            title:"DiscardSubOptions",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"LogConfiguration",
            content:"LogConfiguration",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli.Logging/LogConfiguration',
            title:"LogConfiguration",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"ItemStateFilter",
            content:"ItemStateFilter",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/ItemStateFilter',
            title:"ItemStateFilter",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"InitSubOptions",
            content:"InitSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/InitSubOptions',
            title:"InitSubOptions",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"LabelSubOptions",
            content:"LabelSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/LabelSubOptions',
            title:"LabelSubOptions",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"Ensure",
            content:"Ensure",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/Ensure',
            title:"Ensure",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"Issue",
            content:"Issue",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Issue',
            title:"Issue",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"LabelAlias",
            content:"LabelAlias",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/LabelAlias',
            title:"LabelAlias",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"CreateSubOptions",
            content:"CreateSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/CreateSubOptions',
            title:"CreateSubOptions",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"OpenSubOptions",
            content:"OpenSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/OpenSubOptions',
            title:"OpenSubOptions",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"ItemState",
            content:"ItemState",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/ItemState',
            title:"ItemState",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"Program",
            content:"Program",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Cli/Program',
            title:"Program",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"BaseVcsOptions",
            content:"BaseVcsOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/BaseVcsOptions',
            title:"BaseVcsOptions",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"BaseSubOptions",
            content:"BaseSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/BaseSubOptions',
            title:"BaseSubOptions",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"GitHubProvider",
            content:"GitHubProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Provider/GitHubProvider',
            title:"GitHubProvider",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"AddAssetsCommand",
            content:"AddAssetsCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/AddAssetsCommand',
            title:"AddAssetsCommand",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"Milestone",
            content:"Milestone",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Milestone',
            title:"Milestone",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"NotFoundException",
            content:"NotFoundException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/NotFoundException',
            title:"NotFoundException",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"AddAssetSubOptions",
            content:"AddAssetSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/AddAssetSubOptions',
            title:"AddAssetSubOptions",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"MainOptions",
            content:"MainOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/MainOptions',
            title:"MainOptions",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"ConfigSerializer",
            content:"ConfigSerializer",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ConfigSerializer',
            title:"ConfigSerializer",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"DiscardCommand",
            content:"DiscardCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/DiscardCommand',
            title:"DiscardCommand",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"CreateCommand",
            content:"CreateCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/CreateCommand',
            title:"CreateCommand",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"PublishSubOptions",
            content:"PublishSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/PublishSubOptions',
            title:"PublishSubOptions",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"ForbiddenException",
            content:"ForbiddenException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/ForbiddenException',
            title:"ForbiddenException",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"CloseCommand",
            content:"CloseCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/CloseCommand',
            title:"CloseCommand",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"ExportSubOptions",
            content:"ExportSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/ExportSubOptions',
            title:"ExportSubOptions",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"CommentGatheringTypeInspector",
            content:"CommentGatheringTypeInspector",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentGatheringTypeInspector',
            title:"CommentGatheringTypeInspector",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"Release",
            content:"Release",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Release',
            title:"Release",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"ExportCommand",
            content:"ExportCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/ExportCommand',
            title:"ExportCommand",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"MilestoneExtensions",
            content:"MilestoneExtensions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Extensions/MilestoneExtensions',
            title:"MilestoneExtensions",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"ReleaseTemplates",
            content:"ReleaseTemplates",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Templates/ReleaseTemplates',
            title:"ReleaseTemplates",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"ApiException",
            content:"ApiException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/ApiException',
            title:"ApiException",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"FileSystem",
            content:"FileSystem",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Helpers/FileSystem',
            title:"FileSystem",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"GitHubProfile",
            content:"GitHubProfile",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.MappingProfiles/GitHubProfile',
            title:"GitHubProfile",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"InvalidIssuesException",
            content:"InvalidIssuesException",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Exceptions/InvalidIssuesException',
            title:"InvalidIssuesException",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"ICommand",
            content:"ICommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/ICommand_1',
            title:"ICommand<TOptions>",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"GitHubProviderIntegrationTests",
            content:"GitHubProviderIntegrationTests",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/GitHubProviderIntegrationTests',
            title:"GitHubProviderIntegrationTests",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"TemplateLoader",
            content:"TemplateLoader",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Templates/TemplateLoader',
            title:"TemplateLoader",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"Helper",
            content:"Helper",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/Helper',
            title:"Helper",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"IFileSystem",
            content:"IFileSystem",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Helpers/IFileSystem',
            title:"IFileSystem",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"AutoMapperConfiguration",
            content:"AutoMapperConfiguration",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/AutoMapperConfiguration',
            title:"AutoMapperConfiguration",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"ReleaseNotesBuilder",
            content:"ReleaseNotesBuilder",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.ReleaseNotes/ReleaseNotesBuilder',
            title:"ReleaseNotesBuilder",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"ShowConfigCommand",
            content:"ShowConfigCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/ShowConfigCommand',
            title:"ShowConfigCommand",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"TemplateFactory",
            content:"TemplateFactory",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Templates/TemplateFactory',
            title:"TemplateFactory",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"SampleAttribute",
            content:"SampleAttribute",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Attributes/SampleAttribute',
            title:"SampleAttribute",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"IVcsService",
            content:"IVcsService",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/IVcsService',
            title:"IVcsService",
            description:""
        }
    );
    a(
        {
            id:57,
            title:"ConfigurationProvider",
            content:"ConfigurationProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/ConfigurationProvider',
            title:"ConfigurationProvider",
            description:""
        }
    );
    a(
        {
            id:58,
            title:"CloseConfig",
            content:"CloseConfig",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration/CloseConfig',
            title:"CloseConfig",
            description:""
        }
    );
    a(
        {
            id:59,
            title:"IVcsProvider",
            content:"IVcsProvider",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Provider/IVcsProvider',
            title:"IVcsProvider",
            description:""
        }
    );
    a(
        {
            id:60,
            title:"OctokitExtensions",
            content:"OctokitExtensions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Extensions/OctokitExtensions',
            title:"OctokitExtensions",
            description:""
        }
    );
    a(
        {
            id:61,
            title:"LabelCommand",
            content:"LabelCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/LabelCommand',
            title:"LabelCommand",
            description:""
        }
    );
    a(
        {
            id:62,
            title:"ReleaseNotesExporter",
            content:"ReleaseNotesExporter",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.ReleaseNotes/ReleaseNotesExporter',
            title:"ReleaseNotesExporter",
            description:""
        }
    );
    a(
        {
            id:63,
            title:"OpenCommand",
            content:"OpenCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/OpenCommand',
            title:"OpenCommand",
            description:""
        }
    );
    a(
        {
            id:64,
            title:"ClientBuilder",
            content:"ClientBuilder",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ClientBuilder',
            title:"ClientBuilder",
            description:""
        }
    );
    a(
        {
            id:65,
            title:"Label",
            content:"Label",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/Label',
            title:"Label",
            description:""
        }
    );
    a(
        {
            id:66,
            title:"CommentsObjectGraphVisitor",
            content:"CommentsObjectGraphVisitor",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Configuration.CommentSerialization/CommentsObjectGraphVisitor',
            title:"CommentsObjectGraphVisitor",
            description:""
        }
    );
    a(
        {
            id:67,
            title:"ReleaseNotesBuilderIntegrationTests",
            content:"ReleaseNotesBuilderIntegrationTests",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.IntegrationTests/ReleaseNotesBuilderIntegrationTests',
            title:"ReleaseNotesBuilderIntegrationTests",
            description:""
        }
    );
    a(
        {
            id:68,
            title:"ReleaseAsset",
            content:"ReleaseAsset",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/ReleaseAsset',
            title:"ReleaseAsset",
            description:""
        }
    );
    a(
        {
            id:69,
            title:"TemplateKind",
            content:"TemplateKind",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Templates/TemplateKind',
            title:"TemplateKind",
            description:""
        }
    );
    a(
        {
            id:70,
            title:"IReleaseNotesBuilder",
            content:"IReleaseNotesBuilder",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.ReleaseNotes/IReleaseNotesBuilder',
            title:"IReleaseNotesBuilder",
            description:""
        }
    );
    a(
        {
            id:71,
            title:"CloseSubOptions",
            content:"CloseSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/CloseSubOptions',
            title:"CloseSubOptions",
            description:""
        }
    );
    a(
        {
            id:72,
            title:"ShowConfigSubOptions",
            content:"ShowConfigSubOptions",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Options/ShowConfigSubOptions',
            title:"ShowConfigSubOptions",
            description:""
        }
    );
    a(
        {
            id:73,
            title:"VcsService",
            content:"VcsService",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core/VcsService',
            title:"VcsService",
            description:""
        }
    );
    a(
        {
            id:74,
            title:"InitCommand",
            content:"InitCommand",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Commands/InitCommand',
            title:"InitCommand",
            description:""
        }
    );
    a(
        {
            id:75,
            title:"IssueComment",
            content:"IssueComment",
            description:'',
            tags:''
        },
        {
            url:'/GitReleaseManager/api/GitReleaseManager.Core.Model/IssueComment',
            title:"IssueComment",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
