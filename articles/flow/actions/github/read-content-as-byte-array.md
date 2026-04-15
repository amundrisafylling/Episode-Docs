# Read Content as byte array

Reads a file from GitHub repository content into memory as a byte array. 
If you need to read the file multiple times, for example processing its contents and then sending the file somewhere else (such as to an archive), you should use the byte array option instead of streaming because the stream can only read once.


![img](../../../../images/flow/github-read-as-byte-array.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow iterates through content, reads the file as byte array, and uploads the file to an Hypergene InVision File Storage.

<br/>

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title  | Optional | The title of the action.   |
| Authentication |  Optional | Select an authentication token. See below. |
| Repository owner | Required | Select or enter the repository owner. |
| Repository name | Required | Select or enter the repository name. |
| Branch | Optional | Select or enter a branch name. |
| Content Path | Required | Path to a content (file) to stream. |
| Return variable name | Optional | Name of the variable containing the byte array. |
| Description | Optional | Additional notes or comments about the action or configuration. |

<br/>

### Limitations

GitHub [limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28) the number of REST API requests that you can make within a specific amount of time.

You can make unauthenticated requests if you are only fetching public data. Unauthenticated requests are associated with the originating IP address, not with the user or application that made the request.
The primary rate limit for unauthenticated requests is 60 requests per hour.

For authenticated users the rate limit is 5,000 requests per hour. If the installation is on a GitHub Enterprise Cloud organization, the installation has a rate limit of 15,000 requests per hour.

<br/>

### Authentication

Authentication requires an authentication token. Click [here](https://docs.catalyst.zoho.com/en/tutorials/githubbot/java/generate-personal-access-token/) for more on creating a token. The easiest way to get started is using a [Personal Access Token](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28#authenticating-with-a-personal-access-token).

<br/>

[!INCLUDE [](__videos.md)]

