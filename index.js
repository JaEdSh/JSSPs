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
              "StartDate": {
                displayName: "Start Date",
                type: "string"
              },
              "EndDate": {
                displayName: "End Date",
                type: "string"
              },
              "Disclaimer": {
                displayName: "Disclaimer",
                type: "number"
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
              var _x$TravisData$Contrac, _x$TravisData$Contrac2, _x$TravisData$Contrac3, _x$TravisData$Contrac4, _x$TravisData$Contrac5, _x$TravisData$Contrac6, _x$TravisData$Contrac7, _x$TravisData$Contrac8, _x$TravisData$Contrac9, _x$TravisData$Finance, _x$TravisData$Finance2, _x$TravisData$Finance3, _x$TravisData$Finance4, _x$TravisData$Finance5, _x$TravisData$Finance6, _x$TravisData$Finance7, _x$TravisData$Finance8, _x$TravisData$Finance9, _x$TravisData$PermitC, _x$TravisData$PermitC2, _x$TravisData$PermitC3, _x$TravisData$PermitC4, _x$TravisData$PermitC5, _x$TravisData$PermitC6, _x$TravisData$PermitC7, _x$TravisData$PermitC8, _x$TravisData$PermitC9, _x$TravisData$Vehicle, _x$TravisData$Vehicle2, _x$TravisData$Vehicle3, _x$TravisData$Vehicle4, _x$TravisData$Vehicle5, _x$TravisData$Vehicle6, _x$TravisData$Vehicle7, _x$TravisData$Vehicle8, _x$TravisData$Vehicle9, _x$TravisData$Vehicle10, _x$TravisData$Vehicle11, _x$TravisData$Vehicle12, _x$TravisData$Vehicle13, _x$TravisData$Vehicle14;

              return {
                "id": x.id,
                "userId": x.userId,
                "title": x.title,
                "body": x.body,
                "Disclaimer": x.Disclaimer,
                "RequestDateTime": x.RequestDateTime,
                "ErrorCode": x.ErrorCode,
                "ErrorMessage": x.ErrorMessage,
                "RequestRecords": x.RequestRecords,
                "AccountID": x.TravisData.AccountID,
                "OperatorTypeName": x.TravisData.OperatorTypeName,
                "OperatorTypeID": x.TravisData.OperatorTypeID,
                "ServiceTypeID": x.TravisData.ServiceTypeID,
                "OpAuthName": x.TravisData.OpAuthName,
                "OpAuthID": x.TravisData.OpAuthID,
                "LegalName": x.TravisData.LegalName,
                "OperatoringName": x.TravisData.OperatoringName,
                "Address1": x.TravisData.Address1,
                "Address2": x.TravisData.Address2,
                "City": x.TravisData.City,
                "State": x.TravisData.State,
                "Zip": x.TravisData.Zip,
                "Phone1": x.TravisData.Phone1,
                "EmailAddress": x.TravisData.EmailAddress,
                "LAXAgreeEndDate": x.TravisData.LAXAgreeEndDate,
                "OpAuthNumber": x.TravisData.OpAuthNumber,
                "LAXAgreeNumber": x.TravisData.LAXAgreeNumber,
                "SuspendedFlag": x.TravisData.SuspendedFlag,
                "ConContactContactID": (_x$TravisData$Contrac = x.TravisData.ContractContact) === null || _x$TravisData$Contrac === void 0 ? void 0 : _x$TravisData$Contrac.ContactID,
                "ConContactFirstName": (_x$TravisData$Contrac2 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac2 === void 0 ? void 0 : _x$TravisData$Contrac2.FirstName,
                "ConContactLastName": (_x$TravisData$Contrac3 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac3 === void 0 ? void 0 : _x$TravisData$Contrac3.LastName,
                "ConContactAddress": (_x$TravisData$Contrac4 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac4 === void 0 ? void 0 : _x$TravisData$Contrac4.Address1,
                "ConContactContactCity": (_x$TravisData$Contrac5 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac5 === void 0 ? void 0 : _x$TravisData$Contrac5.City,
                "ConContactContactState": (_x$TravisData$Contrac6 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac6 === void 0 ? void 0 : _x$TravisData$Contrac6.State,
                "ConContactContactZip": (_x$TravisData$Contrac7 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac7 === void 0 ? void 0 : _x$TravisData$Contrac7.Zip,
                "ConContactContactPhone": (_x$TravisData$Contrac8 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac8 === void 0 ? void 0 : _x$TravisData$Contrac8.Phone,
                "ConContactContactEmail": (_x$TravisData$Contrac9 = x.TravisData.ContractContact) === null || _x$TravisData$Contrac9 === void 0 ? void 0 : _x$TravisData$Contrac9.Email,
                "FinContactContactID": (_x$TravisData$Finance = x.TravisData.FinanceContact) === null || _x$TravisData$Finance === void 0 ? void 0 : _x$TravisData$Finance.ContactID,
                "FinContactFirstName": (_x$TravisData$Finance2 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance2 === void 0 ? void 0 : _x$TravisData$Finance2.FirstName,
                "FinContactLastName": (_x$TravisData$Finance3 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance3 === void 0 ? void 0 : _x$TravisData$Finance3.LastName,
                "FinContactAddress": (_x$TravisData$Finance4 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance4 === void 0 ? void 0 : _x$TravisData$Finance4.Address1,
                "FinContactContactCity": (_x$TravisData$Finance5 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance5 === void 0 ? void 0 : _x$TravisData$Finance5.City,
                "FinContactContactState": (_x$TravisData$Finance6 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance6 === void 0 ? void 0 : _x$TravisData$Finance6.State,
                "FinContactContactZip": (_x$TravisData$Finance7 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance7 === void 0 ? void 0 : _x$TravisData$Finance7.Zip,
                "FinContactContactPhone": (_x$TravisData$Finance8 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance8 === void 0 ? void 0 : _x$TravisData$Finance8.Phone,
                "FinContactContactEmail": (_x$TravisData$Finance9 = x.TravisData.FinanceContact) === null || _x$TravisData$Finance9 === void 0 ? void 0 : _x$TravisData$Finance9.Email,
                "PerContactContactID": (_x$TravisData$PermitC = x.TravisData.PermitContact) === null || _x$TravisData$PermitC === void 0 ? void 0 : _x$TravisData$PermitC.ContactID,
                "PerContactFirstName": (_x$TravisData$PermitC2 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC2 === void 0 ? void 0 : _x$TravisData$PermitC2.FirstName,
                "PerContactLastName": (_x$TravisData$PermitC3 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC3 === void 0 ? void 0 : _x$TravisData$PermitC3.LastName,
                "PerContactAddress": (_x$TravisData$PermitC4 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC4 === void 0 ? void 0 : _x$TravisData$PermitC4.Address1,
                "PerContactContactCity": (_x$TravisData$PermitC5 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC5 === void 0 ? void 0 : _x$TravisData$PermitC5.City,
                "PerContactContactState": (_x$TravisData$PermitC6 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC6 === void 0 ? void 0 : _x$TravisData$PermitC6.State,
                "PerContactContactZip": (_x$TravisData$PermitC7 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC7 === void 0 ? void 0 : _x$TravisData$PermitC7.Zip,
                "PerContactContactPhone": (_x$TravisData$PermitC8 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC8 === void 0 ? void 0 : _x$TravisData$PermitC8.Phone,
                "PerContactContactEmail": (_x$TravisData$PermitC9 = x.TravisData.PermitContact) === null || _x$TravisData$PermitC9 === void 0 ? void 0 : _x$TravisData$PermitC9.Email,
                "VehicleId": (_x$TravisData$Vehicle = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle === void 0 ? void 0 : _x$TravisData$Vehicle.VehicleId,
                "FleetNumber": (_x$TravisData$Vehicle2 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle2 === void 0 ? void 0 : _x$TravisData$Vehicle2.FleetNumber,
                "Year": (_x$TravisData$Vehicle3 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle3 === void 0 ? void 0 : _x$TravisData$Vehicle3.Year,
                "Make": (_x$TravisData$Vehicle4 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle4 === void 0 ? void 0 : _x$TravisData$Vehicle4.Make,
                "Model": (_x$TravisData$Vehicle5 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle5 === void 0 ? void 0 : _x$TravisData$Vehicle5.Model,
                "Color": (_x$TravisData$Vehicle6 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle6 === void 0 ? void 0 : _x$TravisData$Vehicle6.Color,
                "VIN": (_x$TravisData$Vehicle7 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle7 === void 0 ? void 0 : _x$TravisData$Vehicle7.VIN,
                "PassengerCapacity": (_x$TravisData$Vehicle8 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle8 === void 0 ? void 0 : _x$TravisData$Vehicle8.PassengerCapacity,
                "FuelTypeID": (_x$TravisData$Vehicle9 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle9 === void 0 ? void 0 : _x$TravisData$Vehicle9.FuelTypeID,
                "FuelTypeName": (_x$TravisData$Vehicle10 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle10 === void 0 ? void 0 : _x$TravisData$Vehicle10.FuelTypeName,
                "LicensePlate": (_x$TravisData$Vehicle11 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle11 === void 0 ? void 0 : _x$TravisData$Vehicle11.LicensePlate,
                "Weight": (_x$TravisData$Vehicle12 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle12 === void 0 ? void 0 : _x$TravisData$Vehicle12.Weight,
                "Transponder": (_x$TravisData$Vehicle13 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle13 === void 0 ? void 0 : _x$TravisData$Vehicle13.Transponder,
                "DecalNumber": (_x$TravisData$Vehicle14 = x.TravisData.Vehicles) === null || _x$TravisData$Vehicle14 === void 0 ? void 0 : _x$TravisData$Vehicle14.DecalNumber
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
