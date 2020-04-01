# GCP CLI

## :o: Installation

:pushpin: Windows

```
PS > choco install gcloudsdk
```

:pushpin: MacOS

```
% brew cask install google-cloud-sdk
```

## :a: Configure

### :pushpin: Service Account Credentials

https://cloud.google.com/docs/authentication/production#providing_service_account_credentials

Example

```
~/.gcp/b300098957-a2662a9bd338.json
```

```
% export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.gcp/b300098957-a2662a9bd338.json"
```

:ab: gcloud CLI

```
% gcloud beta compute ssh --zone "us-central1-a" "cb-gcp-test" --project "b300098957"
You do not currently have this command group installed.  Using it 
requires the installation of components: [beta]


Your current Cloud SDK version is: 286.0.0
Installing components from version: 286.0.0

┌─────────────────────────────────────────────┐
│     These components will be installed.     │
├──────────────────────┬────────────┬─────────┤
│         Name         │  Version   │   Size  │
├──────────────────────┼────────────┼─────────┤
│ gcloud Beta Commands │ 2019.05.17 │ < 1 MiB │
└──────────────────────┴────────────┴─────────┘

For the latest full release notes, please visit:
  https://cloud.google.com/sdk/release_notes

Do you want to continue (Y/n)?  Y

╔════════════════════════════════════════════════════════════╗
╠═ Creating update staging area                             ═╣
╠════════════════════════════════════════════════════════════╣
╠═ Installing: gcloud Beta Commands                         ═╣
╠════════════════════════════════════════════════════════════╣
╠═ Creating backup and activating new installation          ═╣
╚════════════════════════════════════════════════════════════╝

Performing post processing steps...done.                                                                                                                                      

Update done!

Restarting command:
  $ gcloud beta compute ssh --zone us-central1-a cb-gcp-test --project b300098957

ERROR: (gcloud.beta.compute.ssh) You do not currently have an active account selected.
Please run:

  $ gcloud auth login

to obtain new credentials, or if you have already logged in with a
different account:

  $ gcloud config set account ACCOUNT

to select an already authenticated account to use.

```

:pushpin: Connection par le `browser`

```
% gcloud auth login
Your browser has been opened to visit:

    https://accounts.google.com/o/oauth2/auth?code_challenge=hf8c4Uge0NqytjHSWlUNFr7UO1LP5v5QqT8tsftyOkU&prompt=select_account&code_challenge_method=S256&access_type=offline&redirect_uri=http%3A%2F%2Flocalhost%3A8085%2F&response_type=code&client_id=32555940559.apps.googleusercontent.com&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth



You are now logged in as [300098957@collegeboreal.ca].
Your current project is [None].  You can change this setting by running:
  $ gcloud config set project PROJECT_ID
```

:pushpin: Set le projet

```
% gcloud config set project b300098957
Updated property [core/project].
```

