# GCP - Google Cloud Platform

## :one: GCP Console

https://console.cloud.google.com

## :two: Configuration 

### :pushpin: Create a Service Account

https://cloud.google.com/docs/authentication/production#creating_a_service_account



1. In the Cloud Console, go to the Create service account key page.
    
    **Go to the Create Service Account Key page**
    
2. From the `Service account` list, select `New service account`.

3. In the Service account name field, enter a name.

4. From the `Role` list, select `Project > Owner`.

:star:
Note: The Role field authorizes your service account to access resources. 
You can view and change this field later by using the Cloud Console. 
If you are developing a production app, specify more granular permissions than `Project > Owner`. 
For more information, see [granting role` to service accounts](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts).

5. Click `Create`. A JSON file that contains your key downloads to your computer.


<img src="images/AZSubscription.png" width="477" heigth="326"></img>

## :three: Créer sa machine virtuelle VM

:pushpin: [deployment](deployment)

## :four: Gérer son environnement avec AWS CLI

:bulb: [gloud CLI](cli)



