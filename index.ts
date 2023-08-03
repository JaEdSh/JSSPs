import '@k2oss/k2-broker-core';

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


ondescribe = async function ({configuration}): Promise<void> {
    postSchema({
        objects: {
            "Operators": {
                displayName: "Operators",
                description: "Gets Operator Data",
                properties: {
                    "APIKey": { displayName: "API Key", type: "string" },
                    "CompanyName": { displayName: "Company Name", type: "string" },
                    "StartDate": { displayName: "Start Date", type: "string" },
                    "EndDate": { displayName: "End Date", type: "string" },
                    "AccountID": { displayName: "Account ID", type: "number" },
                    "OperatorTypeName": { displayName: "Operator Type Name", type: "string" },
                    "OperatorTypeID": { displayName: "Operator Type ID", type: "number" },
                    "ServiceTypeID": { displayName: "Service Type ID", type: "number" },
                    "OpAuthName": { displayName: "Op Auth Name", type: "string" },
                    "OpAuthID": { displayName: "Op Auth ID", type: "number" },
                    "LegalName": { displayName: "Legal Name", type: "string" },
                    "OperatoringName": { displayName: "Operatoring Name", type: "string" },
                    "Address1": { displayName: "Address1", type: "string" },
                    "Address2": { displayName: "Address2", type: "string" },
                    "City": { displayName: "City", type: "string" },
                    "State": { displayName: "State", type: "string" },
                    "Zip": { displayName: "Zip", type: "string" },
                    "Phone1": { displayName: "Phone1", type: "string" },
                    "EmailAddress": { displayName: "Email Address", type: "string" },
                    "LAXAgreeEndDate": { displayName: "LAX Agree End Date", type: "string" },
                    "OpAuthNumber": { displayName: "Op Auth Number", type: "string" },
                    "LAXAgreeNumber": { displayName: "LAX Agree Number", type: "string" },
                    "SuspendedFlag": { displayName: "Suspended Flag", type: "number" }
                    //"ContractContactFull": { displayName: "Contract Contact Full", type: "string" },
                    //"FinanceContactFull": { displayName: "Finance Contact Full", type: "string" },
                    //"PermitContactFull": { displayName: "Permit Contact Full", type: "string" },
                    //"VehiclesCount": { displayName: "Vehicles Count", type: "string" },
                    //"VehiclesFull": { displayName: "Vehicles Full", type: "string" }
                },
                methods: {
                    "getListByCompanyName": {
                        displayName: "GetOperatorsByCompanyName",
                        type: "list",
                        inputs: ["APIKey", "CompanyName"],
                        requiredInputs: ["APIKey", "CompanyName"],
                        outputs: [
                            "AccountID",
                            "OperatorTypeName",
                            "OperatorTypeID",
                            "ServiceTypeID",
                            "OpAuthName",
                            "OpAuthID",
                            "LegalName",
                            "OperatoringName",
                            "Address1",
                            "Address2",
                            "City",
                            "State",
                            "Zip",
                            "Phone1",
                            "EmailAddress",
                            "LAXAgreeEndDate",
                            "OpAuthNumber",
                            "LAXAgreeNumber",
                            "SuspendedFlag"
                            //"ContractContactFull",
                            //"FinanceContactFull",
                            //"PermitContactFull",
                            //"VehiclesCount",
                            //"VehiclesFull"
                        ]
                    },
                    "getListByDateRange": {
                        displayName: "GetOperatorsByDateRange",
                        type: "list",
                        inputs: ["APIKey", "StartDate", "EndDate"],
                        requiredInputs: ["APIKey", "StartDate", "EndDate"],
                        outputs: [
                            "AccountID",
                            "OperatorTypeName",
                            "OperatorTypeID",
                            "ServiceTypeID",
                            "OpAuthName",
                            "OpAuthID",
                            "LegalName",
                            "OperatoringName",
                            "Address1",
                            "Address2",
                            "City",
                            "State",
                            "Zip",
                            "Phone1",
                            "EmailAddress",
                            "LAXAgreeEndDate",
                            "OpAuthNumber",
                            "LAXAgreeNumber",
                            "SuspendedFlag"
                            //"ContractContactFull",
                            //"FinanceContactFull",
                            //"PermitContactFull",
                            //"VehiclesCount",
                            //"VehiclesFull"
                        ]
                    },

                    "getListByLSONumber": {
                        displayName: "GetOperatorsByLSO",
                        type: "list",
                        inputs: ["APIKey", "LAXAgreeNumber"],
                        requiredInputs: ["APIKey", "LAXAgreeNumber"],
                        outputs: [
                            "AccountID",
                            "OperatorTypeName",
                            "OperatorTypeID",
                            "ServiceTypeID",
                            "OpAuthName",
                            "OpAuthID",
                            "LegalName",
                            "OperatoringName",
                            "Address1",
                            "Address2",
                            "City",
                            "State",
                            "Zip",
                            "Phone1",
                            "EmailAddress",
                            "LAXAgreeEndDate",
                            "OpAuthNumber",
                            "LAXAgreeNumber",
                            "SuspendedFlag"
                            //"ContractContactFull",
                            //"FinanceContactFull",
                            //"PermitContactFull",
                            //"VehiclesCount",
                            //"VehiclesFull"
                        ]
                    }
                    //"getById": {
                    //    displayName: "Get Post By ID",
                    //    type: "read",
                    //    inputs: ["id"],
                    //    requiredInputs: ["id"],
                    //    outputs: ["id", "userId", "title", "body"]
                    //},
                    //"getByUserId": {
                    //    displayName: "Get Posts By User ID",
                    //    type: "list",
                    //    inputs: ["userId"],
                    //    requiredInputs: ["userId"],
                    //    outputs: ["id", "userId", "title", "body"]
                    //},
                    //"create": {
                    //    displayName: "Create Post",
                    //    type: "create",
                    //    inputs: ["userId", "title", "body"],
                    //    outputs: ["id", "userId", "title", "body"]
                    //},
                    //"update": {
                    //    displayName: "Update Post",
                    //    type: "update",
                    //    inputs: ["id", "userId", "title", "body"],
                    //    requiredInputs: ["id"],
                    //    outputs: ["id", "userId", "title", "body"]
                    //},
                    //"delete": {
                    //    displayName: "Delete Post",
                    //    type: "delete",
                    //    inputs: ["id"],
                    //    requiredInputs: ["id"]
                    //}
                }
            }            
        }
    }
    )
};

onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
    switch (objectName) {
        case "Operators": await onexecuteOperators(methodName, parameters, properties, configuration); break;
        //case "comments": await onexecuteComments(methodName, parameters, properties, configuration); break;
        //case "todos": await onexecuteToDos(methodName, parameters, properties, configuration); break;
        //case "users": await onexecuteUsers(methodName, parameters, properties, configuration); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

async function onexecuteOperators(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "getListByCompanyName": await onexecuteOperatorsGetListByCompanyName(parameters, properties, configuration); break;
        case "getListByDateRange": await onexecuteOperatorsGetListByDateRange(parameters, properties, configuration); break; 
        case "getListByLSONumber": await onexecuteOperatorsGetListByLSONumber(parameters, properties, configuration); break; 
        //case "create": await onexecutePostsCreate(parameters, properties, configuration); break;
        //case "update": await onexecutePostsUpdate(parameters, properties, configuration); break;
        //case "delete": await onexecutePostsDelete(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

//async function onexecuteComments(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    switch (methodName) {
//        case "getList": await onexecuteCommentsGetList(parameters, properties, configuration); break;
//        case "getById": await onexecuteCommentsGetById(parameters, properties, configuration); break;
//        case "getByPostId": await onexecuteCommentsGetByPostId(parameters, properties, configuration); break;
//        default: throw new Error("The method " + methodName + " is not supported.");
//    }
//}

//async function onexecuteToDos(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    switch (methodName) {
//        case "getList": await onexecuteToDosGetList(parameters, properties, configuration); break;
//        case "getById": await onexecuteToDosGetById(parameters, properties, configuration); break;
//        default: throw new Error("The method " + methodName + " is not supported.");
//    }
//}

//async function onexecuteUsers(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    switch (methodName) {
//        case "getList": await onexecuteUsersGetList(parameters, properties, configuration); break;
//        case "getById": await onexecuteUsersGetById(parameters, properties, configuration); break;
//        default: throw new Error("The method " + methodName + " is not supported.");
//    }
//}

function onexecuteOperatorsGetListByCompanyName(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'Companies/';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                //console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);
                let objData = [];
                objData = (obj[0].TravisData.map(x => {
                    return {
                        "AccountID": x.AccountID,
                        "OperatorTypeName": x.OperatorTypeName,
                        "OperatorTypeID": x.OperatorTypeID,
                        "ServiceTypeID": x.ServiceTypeID,
                        "OpAuthName": x.OpAuthName,
                        "OpAuthID": x.OpAuthID,
                        "LegalName": x.LegalName,
                        "OperatoringName": x.OperatingName,
                        "Address1": x.Address1,
                        "Address2": x.Address2,
                        "City": x.City,
                        "State": x.State,
                        "Zip": x.Zip,
                        "Phone1": x.Phone1,
                        "EmailAddress": x.EmailAddress,
                        "LAXAgreeEndDate": x.LAXAgreeEndDate,
                        "OpAuthNumber": x.OpAuthNumber,
                        "LAXAgreeNumber": x.LAXAgreeNumber
                        //"SuspendedFlag": x.SuspendedFlag
                        //"ContractContactFull": x.ContractContact.toString()
                        //"FinanceContactFull": x.FinanceContact,
                        //"PermitContactFull": x.PermitContact,
                        //"VehiclesCount": x.Vehicles?.length()
                        //"VehiclesFull": x.Vehicles
                    }
                }));
                postResult(objData);
                resolve();
            } catch (e) {
                reject(e);
            }
            
        }
        if (typeof properties["APIKey"] !== "string") throw new Error("properties[\"APIKey\"] is not of type string");
        if (typeof properties["CompanyName"] !== "string") throw new Error("properties[\"CompanyName\"] is not of type string");
        xhr.open("GET", urlValue + encodeURIComponent(properties["CompanyName"]) + "?apikey=" + encodeURIComponent(properties["APIKey"]));
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    });

}

function onexecuteOperatorsGetListByDateRange(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'PermitDates/'; 
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                //console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);
                let objData = [];
                objData = (obj[0].TravisData.map(x => {
                    return {
                        "AccountID": x.AccountID,
                        "OperatorTypeName": x.OperatorTypeName,
                        "OperatorTypeID": x.OperatorTypeID,
                        "ServiceTypeID": x.ServiceTypeID,
                        "OpAuthName": x.OpAuthName,
                        "OpAuthID": x.OpAuthID,
                        "LegalName": x.LegalName,
                        "OperatoringName": x.OperatingName,
                        "Address1": x.Address1,
                        "Address2": x.Address2,
                        "City": x.City,
                        "State": x.State,
                        "Zip": x.Zip,
                        "Phone1": x.Phone1,
                        "EmailAddress": x.EmailAddress,
                        "LAXAgreeEndDate": x.LAXAgreeEndDate,
                        "OpAuthNumber": x.OpAuthNumber,
                        "LAXAgreeNumber": x.LAXAgreeNumber
                        //"SuspendedFlag": x.SuspendedFlag
                        //"ContractContactFull": x.ContractContact.toString()
                        //"FinanceContactFull": x.FinanceContact,
                        //"PermitContactFull": x.PermitContact,
                        //"VehiclesCount": x.Vehicles?.length()
                        //"VehiclesFull": x.Vehicles
                    }
                }));
                postResult(objData);
                resolve();
            } catch (e) {
                reject(e);
            }

        }
        if (typeof properties["APIKey"] !== "string") throw new Error("properties[\"APIKey\"] is not of type string");
        if (typeof properties["StartDate"] !== "string") throw new Error("properties[\"StartDate\"] is not of type string");
        if (typeof properties["EndDate"] !== "string") throw new Error("properties[\"EndDate\"] is not of type string");
        xhr.open("GET", urlValue + encodeURIComponent(properties["StartDate"]) + '/' + encodeURIComponent(properties["EndDate"]) + "?apikey=" + encodeURIComponent(properties["APIKey"]));
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    });

}

function onexecuteOperatorsGetListByLSONumber(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'Ian/';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                //console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);
                let objData = [];
                objData = (obj[0].TravisData.map(x => {
                    return {
                        "AccountID": x.AccountID,
                        "OperatorTypeName": x.OperatorTypeName,
                        "OperatorTypeID": x.OperatorTypeID,
                        "ServiceTypeID": x.ServiceTypeID,
                        "OpAuthName": x.OpAuthName,
                        "OpAuthID": x.OpAuthID,
                        "LegalName": x.LegalName,
                        "OperatoringName": x.OperatingName,
                        "Address1": x.Address1,
                        "Address2": x.Address2,
                        "City": x.City,
                        "State": x.State,
                        "Zip": x.Zip,
                        "Phone1": x.Phone1,
                        "EmailAddress": x.EmailAddress,
                        "LAXAgreeEndDate": x.LAXAgreeEndDate,
                        "OpAuthNumber": x.OpAuthNumber,
                        "LAXAgreeNumber": x.LAXAgreeNumber
                        //"SuspendedFlag": x.SuspendedFlag
                        //"ContractContactFull": x.ContractContact.toString()
                        //"FinanceContactFull": x.FinanceContact,
                        //"PermitContactFull": x.PermitContact,
                        //"VehiclesCount": x.Vehicles?.length()
                        //"VehiclesFull": x.Vehicles
                    }
                }));
                postResult(objData);
                resolve();
            } catch (e) {
                reject(e);
            }

        }
        if (typeof properties["LAXAgreeNumber"] !== "string") throw new Error("properties[\"LAXAgreeNumber\"] is not of type string");
        if (typeof properties["APIKey"] !== "string") throw new Error("properties[\"APIKey\"] is not of type string");
        xhr.open("GET", urlValue + encodeURIComponent(properties["LAXAgreeNumber"]) + "?apikey=" + encodeURIComponent(properties["APIKey"]));
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    });

}

//function onexecutePostsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"] + 'posts/';
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "userId": obj.userId,
//                    "title": obj.title,
//                    "body": obj.body
//                });
//                resolve();
//            } catch (e) {
//                reject(e);
//            }
//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");

//        xhr.open("GET", urlValue + encodeURIComponent(properties["id"]));
//        xhr.send();
//    });
//}

//function onexecutePostsGetByUserId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"] + 'posts?userId=';
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult(obj.map(x => {
//                    return {
//                        "id": x.id,
//                        "userId": x.userId,
//                        "title": x.title,
//                        "body": x.body
//                    }
//                }));
//                resolve();
//            } catch (e) {
//                reject(e);
//            }

//        }

//        if(typeof properties["userId"] !== "number") throw new Error("properties[\"userId\"] is not of type number");
//        xhr.open("GET", urlValue + encodeURIComponent(properties["userId"]));
//        xhr.send();
//    });
//}


//function onexecutePostsCreate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"] + 'posts/';
//        var data = JSON.stringify({
//            "userId": properties["userId"],
//            "title": properties["title"],
//            "body": properties["body"]
//        });

//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                // look for 'created' code
//                if (xhr.status !== 201) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "userId": obj.userId,
//                    "title": obj.title,
//                    "body": obj.body
//                });
//                resolve();
//            } catch (e) {
//                reject(e);
//            }
//        }
//        xhr.open("POST", urlValue);
//        xhr.setRequestHeader("Content-Type", "application/json");
//        xhr.send(data);
//    });
//}

//function onexecutePostsUpdate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"] + 'posts/';
//        var data = JSON.stringify({
//            "userId": properties["userId"],
//            "title": properties["title"],
//            "body": properties["body"]
//        });

//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "userId": obj.userId,
//                    "title": obj.title,
//                    "body": obj.body
//                });
//                resolve();
//            } catch (e) {
//                reject(e);
//            }
//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
//        xhr.open("PUT", urlValue + encodeURIComponent(properties["id"]));
//        xhr.setRequestHeader("Content-Type", "application/json");
//        xhr.send(data);
//    });
//}

//function onexecutePostsDelete(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
//                resolve();
//            } catch (e) {
//                reject(e);
//            }
//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
//        xhr.open("DELETE", urlValue + 'posts/' + encodeURIComponent(properties["id"]));
//        xhr.setRequestHeader("Content-Type", "application/json");
//        xhr.send();
//    });
//}

//function onexecuteCommentsGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"] + 'comments';
//        var xhr = new XMLHttpRequest();

//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
//                var obj = JSON.parse(xhr.responseText);
//                postResult(obj.map(x => {
//                    return {
//                        "id": x.id,
//                        "postId": x.postId,
//                        "name": x.name,
//                        "email": x.email,
//                        "body": x.body
//                    }
//                }));
//                resolve();
//            } catch (error) {
//                reject(error);
//            }
//        }
//        xhr.open("GET", urlValue);
//        xhr.send();
//    });
//}

//function onexecuteCommentsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();

//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "postId": obj.postId,
//                    "name": obj.name,
//                    "email": obj.email,
//                    "body": obj.body
//                });
//                resolve();
//            } catch (error) {
//                reject(error);
//            }
//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
//        xhr.open("GET", urlValue + 'comments/' + encodeURIComponent(properties["id"]));
//        xhr.send();
//    });
//}

//function onexecuteCommentsGetByPostId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult(obj.map(x => {
//                    return {
//                        "id": x.id,
//                        "postId": x.postId,
//                        "name": x.name,
//                        "email": x.email,
//                        "body": x.body
//                    }
//                }));
//                resolve();
//            } catch (error) {
//                reject(error);
//            }

//        }

//        if(typeof properties["postId"] !== "number") throw new Error("properties[\"postId\"] is not of type number");
//        xhr.open("GET", urlValue + 'comments?postId=' + encodeURIComponent(properties["postId"]));
//        xhr.send();
//    });
//}

//function onexecuteToDosGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult(obj.map(x => {
//                    return {
//                        "id": x.id,
//                        "userId": x.userId,
//                        "title": x.title,
//                        "completed": x.completed
//                    }
//                }));
//                resolve();
//            } catch (error) {
//                reject(error);
//            }

//        }
//        xhr.open("GET", urlValue + 'todos/');
//        xhr.send();
//    });
//}

//function onexecuteToDosGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "userId": obj.userId,
//                    "title": obj.title,
//                    "completed": obj.completed
//                });
//                resolve();
//            } catch (error) {
//                reject(error);
//            }

//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
//        xhr.open("GET", urlValue + 'todos/' + encodeURIComponent(properties["id"]));
//        xhr.send();
//    });
//}

//function onexecuteUsersGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult(obj.map(x => {
//                    return {
//                        "id": x.id,
//                        "name": x.name,
//                        "username": x.username,
//                        "email": x.email,
//                        "addressStreet": x.address.street,
//                        "addressSuite": x.address.suite,
//                        "addressCity": x.address.city,
//                        "addressGeoLat": x.address.geo.lat,
//                        "addressGeoLng": x.address.geo.lng,
//                        "phone": x.phone,
//                        "website": x.website,
//                        "companyName": x.company.name,
//                        "companyCatchPhrase": x.company.catchPhrase,
//                        "companyBs": x.company.bs
//                    }
//                }));
//                resolve();
//            } catch (error) {
//                reject(error);
//            }

//        }
//        xhr.open("GET", urlValue + 'users/');
//        xhr.send();
//    });
//}

//function onexecuteUsersGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
//    return new Promise<void>((resolve, reject) => {
//        var urlValue = configuration["ServiceURL"];
//        var xhr = new XMLHttpRequest();
//        xhr.onreadystatechange = function () {
//            try {
//                if (xhr.readyState !== 4) return;
//                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

//                var obj = JSON.parse(xhr.responseText);
//                postResult({
//                    "id": obj.id,
//                    "name": obj.name,
//                    "username": obj.username,
//                    "email": obj.email,
//                    "addressStreet": obj.address.street,
//                    "addressSuite": obj.address.suite,
//                    "addressCity": obj.address.city,
//                    "addressGeoLat": obj.address.geo.lat,
//                    "addressGeoLng": obj.address.geo.lng,
//                    "phone": obj.phone,
//                    "website": obj.website,
//                    "companyName": obj.company.name,
//                    "companyCatchPhrase": obj.company.catchPhrase,
//                    "companyBs": obj.company.bs
//                });
//                resolve();
//            } catch (error) {
//                reject(error);
//            }
//        }

//        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
//        xhr.open("GET", urlValue + 'users/' + encodeURIComponent(properties["id"]));
//        xhr.send();
//    });
//}