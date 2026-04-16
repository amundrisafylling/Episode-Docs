# Replace relative URLs

Replaces relative URLs in an HTML document or element with absolute URLs.

A typical use case for this action is storing information from a website (such as an internal knowledge base) in a vector database used for Retrieval-Augmented Generation (RAG) in an AI chat. Links to topics are often stored as URLs relative to the original site. However, when an LLM replies with information from the RAG lookup, the response is no longer in the context of the original website, so relative links are broken.

![HTML Replace Relative Urls](/images/flow/html-replace-relative-urls.png)

<br/>

## Properties

| Name          | Type                  | Description                            |
|---------------|-----------------------|----------------------------------------|
| HTML content  | Yes | A [string](https://learn.microsoft.com/en-us/dotnet/api/system.string), [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) or `byte array` containing an HTML document or an HTML fragment. |
| Base URL      | Yes | The base URL of the web site that the HTML document originates from. |
| Result variable name | Yes | The name of the variable that contains the output from this action. |

<br/>

## Returns

This action returns the HTML input as a [string](https://learn.microsoft.com/en-us/dotnet/api/system.string), with relative URLs replaced by absolute URLs.