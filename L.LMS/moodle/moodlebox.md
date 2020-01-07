# Moodle on :strawberry:


https://moodlebox.net/


### Credentials

https://moodlebox.net/en/help/moodlebox-credentials/


###### :m: security

:pushpin: Encrypted Password: (i.e. DB)

```
% openssl base64 -e <<< 'moodlebox'               
bW9vZGxlYm94Cg==
```

:pushpin: Decrypted Password: (i.e. DB)

```
% openssl base64 -d <<< 'bW9vZGxlYm94Cg=='
moodlebox
```
