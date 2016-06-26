SystemJS.config({
  defaultExtension: false,
  nodeConfig: {
    "paths": {
      "app/": "src/"
    }
  },
  devConfig: {
    "map": {
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
      "text": "github:systemjs/plugin-text@0.0.8"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "main": "app.ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        },
        "*.html": {
          "loader": "text"
        },
        "*.css": {
          "loader": "css"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.6",
    "angular-resource": "github:angular/bower-angular-resource@1.5.6",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "chart.js": "npm:chart.js@2.1.6",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.23",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "tc-angular-chartjs": "npm:tc-angular-chartjs@2.0.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "typescript-collections": "npm:typescript-collections@1.1.2"
  },
  packages: {
    "github:angular/bower-angular-resource@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:frankwallis/plugin-typescript@4.0.16": {
      "map": {
        "typescript": "npm:typescript@1.8.10"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "npm:jquery@2.2.4"
      }
    },
    "npm:tc-angular-chartjs@2.0.0": {
      "map": {
        "chart.js": "npm:chart.js@2.1.6"
      }
    },
    "npm:chart.js@2.1.6": {
      "map": {
        "moment": "npm:moment@2.13.0",
        "chartjs-color": "npm:chartjs-color@2.0.0"
      }
    },
    "npm:chartjs-color@2.0.0": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "chartjs-color-string": "npm:chartjs-color-string@0.4.0"
      }
    },
    "npm:chartjs-color-string@0.4.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    }
  }
});
