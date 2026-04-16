# AES Encryption

This action allows users to encrypt content using the AES algorithm.



## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
|   Encryption key              | Yes | The key used to encrypt the content. This is required by the AES algorithm. The length of the key is 256bit.                                    |
|  Initialization vector          | Yes |  The vector used to encrypt the content.  |
| Input content    | Yes |  The content to be encrypted (string or byte array). |
| Output variable name | Yes | The name of the output variable. |
| Output data type | Yes | The data type of the output variable. This can be either a string (base 64 encoded) or byte array. |


![asc](https://profitbasedocs.blob.core.windows.net/flowimages/asc-enc.png)