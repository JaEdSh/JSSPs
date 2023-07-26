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
              "Disclaimer": {
                displayName: "Disclaimer",
                type: "string"
              },
              "RequestDateTime": {
                displayName: "Request DateTime",
                type: "string"
              },
              "ErrorCode": {
                displayName: "Error Code",
                type: "string"
              },
              "ErrorMessage": {
                displayName: "Error Message",
                type: "string"
              },
              "RequestRecords": {
                displayName: "Request Records",
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
              },
              "ConContactContactID": {
                displayName: "Contract Contact ID",
                type: "string"
              },
              "ConContactFirstName": {
                displayName: "Contract Contact First Name",
                type: "string"
              },
              "ConContactLastName": {
                displayName: "Contract Contact Last Name",
                type: "string"
              },
              "ConContactAddress": {
                displayName: "Contract Contact Address",
                type: "string"
              },
              "ConContactContactCity": {
                displayName: "Contract Contact City",
                type: "string"
              },
              "ConContactContactState": {
                displayName: "Contract Contact State",
                type: "string"
              },
              "ConContactContactZip": {
                displayName: "Contract Contact Zip",
                type: "string"
              },
              "ConContactContactPhone": {
                displayName: "Contract Contact Phone",
                type: "string"
              },
              "ConContactContactEmail": {
                displayName: "Contract Contact Email",
                type: "string"
              },
              "FinContactContactID": {
                displayName: "Finance Contact ID",
                type: "string"
              },
              "FinContactFirstName": {
                displayName: "Finance Contact First Name",
                type: "string"
              },
              "FinContactLastName": {
                displayName: "Finance Contact Last Name",
                type: "string"
              },
              "FinContactAddress": {
                displayName: "Finance Contact Address",
                type: "string"
              },
              "FinContactContactCity": {
                displayName: "Finance Contact City",
                type: "string"
              },
              "FinContactContactState": {
                displayName: "Finance Contact State",
                type: "string"
              },
              "FinContactContactZip": {
                displayName: "Finance Contact Zip",
                type: "string"
              },
              "FinContactContactPhone": {
                displayName: "Finance Contact Phone",
                type: "string"
              },
              "FinContactContactEmail": {
                displayName: "Finance Contact Email",
                type: "string"
              },
              "PerContactContactID": {
                displayName: "Permit Contact ID",
                type: "string"
              },
              "PerContactFirstName": {
                displayName: "Permit Contact First Name",
                type: "string"
              },
              "PerContactLastName": {
                displayName: "Permit Contact Last Name",
                type: "string"
              },
              "PerContactAddress": {
                displayName: "Permit Contact Address",
                type: "string"
              },
              "PerContactContactCity": {
                displayName: "Permit Contact City",
                type: "string"
              },
              "PerContactContactState": {
                displayName: "Permit Contact State",
                type: "string"
              },
              "PerContactContactZip": {
                displayName: "Finance Contact Zip",
                type: "string"
              },
              "PerContactContactPhone": {
                displayName: "Permit Contact Phone",
                type: "string"
              },
              "PerContactContactEmail": {
                displayName: "Permit Contact Email",
                type: "string"
              },
              "VehicleId": {
                displayName: "Vehicle Id",
                type: "number"
              },
              "FleetNumber": {
                displayName: "Fleet Number",
                type: "string"
              },
              "Year": {
                displayName: "Year",
                type: "number"
              },
              "Make": {
                displayName: "Make",
                type: "string"
              },
              "Model": {
                displayName: "Model",
                type: "string"
              },
              "Color": {
                displayName: "Color",
                type: "string"
              },
              "VIN": {
                displayName: "VIN",
                type: "string"
              },
              "PassengerCapacity": {
                displayName: "Passenger Capacity",
                type: "string"
              },
              "FuelTypeID": {
                displayName: "Fuel Type ID",
                type: "number"
              },
              "FuelTypeName": {
                displayName: "Fuel Type Name",
                type: "string"
              },
              "LicensePlate": {
                displayName: "License Plate",
                type: "string"
              },
              "Weight": {
                displayName: "Weight",
                type: "string"
              },
              "Transponder": {
                displayName: "Transponder",
                type: "string"
              },
              "DecalNumber": {
                displayName: "Decal Number",
                type: "string"
              }
            },
            methods: {
              "getListByCompanyName": {
                displayName: "Get Operator List",
                type: "list",
                inputs: [],
                parameters: {
                  "APIKey": {
                    displayName: "API Key",
                    type: "string"
                  },
                  "CompanyName": {
                    displayName: "Company Name",
                    type: "string"
                  }
                },
                outputs: ["Disclaimer", "RequestDateTime", "ErrorCode", "ErrorMessage", "RequestRecords", "AccountID", "OperatorTypeName", "OperatorTypeID", "ServiceTypeID", "OpAuthName", "OpAuthID", "LegalName", "OperatoringName", "Address1", "Address2", "City", "State", "Zip", "Phone1", "EmailAddress", "LAXAgreeEndDate", "OpAuthNumber", "LAXAgreeNumber", "SuspendedFlag", "ConContactContactID", "ConContactFirstName", "ConContactLastName", "ConContactAddress", "ConContactContactCity", "ConContactContactState", "ConContactContactZip", "ConContactContactPhone", "ConContactContactEmail", "FinContactContactID", "FinContactFirstName", "FinContactLastName", "FinContactAddress", "FinContactContactCity", "FinContactContactState", "FinContactContactZip", "FinContactContactPhone", "FinContactContactEmail", "PerContactContactID", "PerContactFirstName", "PerContactLastName", "PerContactAddress", "PerContactContactCity", "PerContactContactState", "PerContactContactZip", "PerContactContactPhone", "PerContactContactEmail", "VehicleId", "FleetNumber", "Year", "Make", "Model", "Color", "VIN", "PassengerCapacity", "FuelTypeID", "FuelTypeName", "LicensePlate", "Weight", "Transponder", "DecalNumber"]
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
        var urlValue = configuration["ServiceURL"] + 'Companies';
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
            var obj = JSON.parse(xhr.responseText);
            postResult(obj.map(x => {
              return {
                "Disclaimer": x.Disclaimer,
                "RequestDateTime": x.RequestDateTime,
                "ErrorCode": x.ErrorCode,
                "ErrorMessage": x.ErrorMessage,
                "RequestRecords": x.RequestRecords
              };
            }));
            resolve();
          } catch (e) {
            reject(e);
          }
        };

        if (typeof parameters["APIKey"] !== "string") throw new Error("parameters[\"APIKey\"] is not of type string");
        if (typeof parameters["CompanyName"] !== "string") throw new Error("parameters[\"CompanyName\"] is not of type string");
        xhr.open("GET", urlValue + "/" + encodeURIComponent(parameters["CompanyName"]) + "?apikey=" + encodeURIComponent(parameters["APIKey"]));
        xhr.send();
      });
    }

})();
//# sourceMappingURL=index.js.map
