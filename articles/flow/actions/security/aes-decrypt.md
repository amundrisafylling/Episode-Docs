# AES Decryption


This action allows users to decrypt content using the AES algorithm.

![asc](https://profitbasedocs.blob.core.windows.net/flowimages/asc-dec.png)

## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
|   Encryption key | Required | The key used to decrypt the content. This is required by the AES algorithm |
|  Initialization vector | Required |  The vector used to decrypt the content. |
| Input content    | Required |  The content to be decrypted (string or byte array). |
| Output variable name | Required | The name of the output variable. |
| Output data type | Required | The data type of the output variable. This can be either a string (base 64 encoded) or byte array. |
