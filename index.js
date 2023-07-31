(function () {

    metadata = {
      "systemName": "TravisConnecter",
      "displayName": "TRAVIS",
      "description": "A broker to connect to the Travis API",
      "configuration": {
        "ServiceURL": {
          displayName: "TravisConnecter Service URL",
          type: "string",
          value: "https://api-test.lacity.org/lawa/TravisOnBoard/GetTravisData/"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        objects: {
          "Operators": {
            displayName: "Operators",
            description: "Gets Operator Data",
            properties: {
              "APIKey": {
                displayName: "API Key",
                type: "string"
              },
              "CompanyName": {
                displayName: "Company Name",
                type: "string"
              },
              "AccountID": {
                displayName: "Account ID",
                type: "number"
              },
              "OperatorTypeName": {
                displayName: "Operator Type Name",
                type: "string"
              },
              "OperatorTypeID": {
                displayName: "Operator Type ID",
                type: "number"
              },
              "ServiceTypeID": {
                displayName: "Service Type ID",
                type: "number"
              },
              "OpAuthName": {
                displayName: "Op Auth Name",
                type: "string"
              },
              "OpAuthID": {
                displayName: "Op Auth ID",
                type: "number"
              },
              "LegalName": {
                displayName: "Legal Name",
                type: "string"
              },
              "OperatoringName": {
                displayName: "Operatoring Name",
                type: "string"
              },
              "Address1": {
                displayName: "Address1",
                type: "string"
              },
              "Address2": {
                displayName: "Address2",
                type: "string"
              },
              "City": {
                displayName: "City",
                type: "string"
              },
              "State": {
                displayName: "State",
                type: "string"
              },
              "Zip": {
                displayName: "Zip",
                type: "string"
              },
              "Phone1": {
                displayName: "Phone1",
                type: "string"
              },
              "EmailAddress": {
                displayName: "Email Address",
                type: "string"
              },
              "LAXAgreeEndDate": {
                displayName: "LAX Agree End Date",
                type: "string"
              },
              "OpAuthNumber": {
                displayName: "Op Auth Number",
                type: "string"
              },
              "LAXAgreeNumber": {
                displayName: "LAX Agree Number",
                type: "string"
              },
              "SuspendedFlag": {
                displayName: "Suspended Flag",
                type: "number"
              }
            },
            methods: {
              "getListByCompanyName": {
                displayName: "Get Operator List",
                type: "list",
                inputs: ["APIKey", "CompanyName"],
                requiredInputs: ["APIKey", "CompanyName"],
                outputs: ["AccountID", "OperatorTypeName", "OperatorTypeID", "ServiceTypeID", "OpAuthName", "OpAuthID", "LegalName", "OperatoringName", "Address1", "Address2", "City", "State", "Zip", "Phone1", "EmailAddress", "LAXAgreeEndDate", "OpAuthNumber", "LAXAgreeNumber", "SuspendedFlag"]
              }
            }
          }
        }
      });
    };

    onexecute = async function ({
      objectName,
      methodName,
      parameters,
      properties,
      configuration
    }) {
      switch (objectName) {
        case "Operators":
          await onexecuteOperators(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteOperators(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "getListByCompanyName":
          await onexecuteOperatorsGetListByCompanyName(parameters, properties, configuration);
          break;
      }
    }

    function onexecuteOperatorsGetListByCompanyName(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'Companies/';
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            var _obj$0$TravisData;

            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
            var obj = JSON.parse(xhr.responseText);
            postResult((_obj$0$TravisData = obj[0].TravisData) === null || _obj$0$TravisData === void 0 ? void 0 : _obj$0$TravisData.map(x => {
              return {
                "AccountID": x.AccountID,
                "OperatorTypeName": x.OperatorTypeName,
                "OperatorTypeID": x.OperatorTypeID,
                "ServiceTypeID": x.ServiceTypeID,
                "OpAuthName": x.OpAuthName,
                "OpAuthID": x.OpAuthID,
                "LegalName": x.LegalName,
                "OperatoringName": x.OperatoringName,
                "Address1": x.Address1,
                "Address2": x.Address2,
                "City": x.City,
                "State": x.State,
                "Zip": x.Zip,
                "Phone1": x.Phone1,
                "EmailAddress": x.EmailAddress,
                "LAXAgreeEndDate": x.LAXAgreeEndDate,
                "OpAuthNumber": x.OpAuthNumber,
                "LAXAgreeNumber": x.LAXAgreeNumber,
                "SuspendedFlag": x.SuspendedFlag
              };
            }));
            resolve();
          } catch (e) {
            reject(e);
          }
        };

        if (typeof properties["APIKey"] !== "string") throw new Error("properties[\"APIKey\"] is not of type string");
        if (typeof properties["CompanyName"] !== "string") throw new Error("properties[\"CompanyName\"] is not of type string");
        xhr.open("GET", urlValue + encodeURIComponent(properties["CompanyName"]) + "?apikey=" + encodeURIComponent(properties["APIKey"]));
        xhr.send();
      });
    }

})();
//# sourceMappingURL=index.js.map
