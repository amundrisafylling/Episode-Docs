# For each Content Information

Iterates over a list of files and directories (commonly referred to as `content`) in a GitHub repository. Each content item contains a Name, Type, and URL to a file or directory.


![Github Foreach](../../../../images/flow/github-foreach.png)


**Example** ![Example](../../../../images/strz.jpg)  
This Flow copies files from a Github repository to an InVision File Storage. It iterates through files in a Github repository, reads each file, and uploads them to the Hypergene InVision File Storage.


## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title  | No | The title of the action.   |
| Authentication | No | Select an authentication token. |
| Repository owner | Yes | Select or enter the repository owner. This is typically the name of the organization (for example `microsoft`) or person that owns the repository.  |
| Repository name | Yes | Select or enter the repository name. |
| Branch | No | Select or enter a branch name. |
| Path | No | The root path from which to list contents. |
| Content name filter | No | A regex expression applied to the content `Name` to filter the items returned. [See example below](#filter). |
| Include content in subdirectories | - | Specifies whether or not to recursively include files and directories in subdirectories. |
| Include directories | - | Specifies whether or not directories (and not only files) should be included int he result. |
| Return variable name | No | Name of the variable containing the current Content Information object. |
| Description | No | Additional notes or comments about the action or configuration. |


### Limitations

GitHub [limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28) the number of REST API requests that you can make within a specific amount of time.

You can make unauthenticated requests if you are only fetching public data. Unauthenticated requests are associated with the originating IP address, not with the user or application that made the request.
The primary rate limit for unauthenticated requests is 60 requests per hour.

For authenticated users the rate limit is 5,000 requests per hour. If the installation is on a GitHub Enterprise Cloud organization, it has a rate limit of 15,000 requests per hour.


### Authentication

Authentication is done with an authentication token. Click [here](https://docs.catalyst.zoho.com/en/tutorials/githubbot/java/generate-personal-access-token/) for more on creating a token.


### Filter

Filters are based on [Regular Expressions](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference) (Reg.Ex).

**Example**
To specify a filter that only returns Markdown (.md) files, use the following regex:
```
/\.md$/
```

[!INCLUDE [](__videos.md)]