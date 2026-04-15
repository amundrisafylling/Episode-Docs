

# Configure Web App and Backend


## About Configuration

Here you will find a description of how to configure the Hypergene InVision Web App and backend to use IBM Security Verify for authentication.

<br/>

## Authorization configuration in appsettings.json



The main difference between Microsoft Entra ID and IBM Security Verify is that you need to specify the **OpenIdConnect/Configuration/TokenEndpoint** when authenticating using IBM Security Verify.

The **Authority** and **TokenEndpoint** addresses should be similar to what's in the template below, but it may be different.  
The correct identity provider information can be obtained by examining the IBM Security Verify endpoint document found in the IBM Security Verify portal.  
It should be in this form: 

```
https://<YOUR_TENANT_ID>.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration
```


<br/>

![Config](https://profitbasedocs.blob.core.windows.net/images/configwebback.png)



<br/>


```json
{
  "Authorization": {
    "Type": "OpenIdConnect",
    "LoggingEnabled": false,
    "OpenIdConnect": {
      "Authority": "https://<YOUR_TENANT_ID>.verify.ibm.com/oidc/endpoint/default",
      "ClientId": "<YOUR_CLIENT_ID>",
      "ClientSecret": "<YOUR_CLIENT_SECRET>",
      "ResponseType": "code id_token",
      "Scope": [ "openid", "profile", "offline_access" ],
      "Configuration": {
        "TokenEndpoint": "https://<YOUR_TENANT_ID>.verify.ibm.com/oidc/endpoint/default/token"
      },
      "WellKnownOpenIdConfiguration": "https://<YOUR_TENANT_ID>.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration/",
      "ClaimsTransformation": {
        "ClaimTypesFilter": [ "name", "preferred_username", "uid", "groupIds" ],
        "ClaimTypeMappings": [
          {
            "fromType": "preferred_username",
            "toType": "sub"
          },
          {
            "fromType": "uid",
            "toType": "oid"
          }
        ]
      }
    },
    "Jwt": {
      "ClaimsTransformation": {
        "ClaimTypesFilter": ["name", "preferred_username", "uid", "groupIds"],
        "ClaimTypeMappings": [
          {
            "fromType": "preferred_username",
            "toType": "sub"
          },
          {
            "fromType": "uid",
            "toType": "oid"
          }
        ]
      }
    },
    "Cookie": {
      "Lifetime": "14.00:00:00"
    }
  },
  "IdentityProvider": {
    "Type": "IBMSV",
    "CanInvite": false,
    "Permissions": "Read",    
    "IBMSV": {}
  }
}

```

