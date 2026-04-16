# Read Content as stream

Reads a file from GitHub repository content as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream). Prefer using streaming over [Read Content as byte array](read-content-as-byte-array.md) if possible. Streaming is generally faster and uses less memory, because streaming doesn't require loading the entire blob into memory before you can start working with the data.


![img](../../../../images/flow/github-read-as-stream.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow iterates through content, streams the file, and uploads the file to an Hypergene InVision File Storage.


## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title  | No | The title of the action.   |
| Authentication | No | Select an authentication token. See below. |
| Repository owner | Yes | Select or enter the repository owner. |
| Repository name | Yes | Select or enter the repository name. |
| Branch | No | Select or enter a branch name. |
| Content Path | Yes | Path to a content (file) to stream. |
| Return variable name | No | Name of the variable containing the stream. |
| Description | No | Additional notes or comments about the action or configuration. |


### Limitations

GitHub [limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28) the number of REST API requests that you can make within a specific amount of time.

You can make unauthenticated requests if you are only fetching public data. Unauthenticated requests are associated with the originating IP address, not with the user or application that made the request.
The primary rate limit for unauthenticated requests is 60 requests per hour.

For authenticated users the rate limit is 5,000 requests per hour. If the installation is on a GitHub Enterprise Cloud organization, the installation has a rate limit of 15,000 requests per hour.


### Authentication

Authentication is done with an authentication token. Click [here](https://docs.catalyst.zoho.com/en/tutorials/githubbot/java/generate-personal-access-token/) for more on creating a token.

<br/>

[!INCLUDE [](__videos.md)]
