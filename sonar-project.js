const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': 'server',
       'sonar.exclusions' : 'server/dist/**',
       'sonar.inclusions' : '**' // Entry point of your code
       }
     }, () => {});