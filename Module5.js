function GetOrders()

{

    var objRequest = new XMLHttpRequest();  //Create AJAX request object


    //Create URL and Query string

    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";

    url += document.getElementById("custid").value;



    //Checks that the object has returned data

    objRequest.onreadystatechange = function()

    {

        if (objRequest.readyState == 4 && objRequest.status == 200)

        {

            var output = JSON.parse(objRequest.responseText);

            GenerateOutput(output);


        }

    }


    //Initiate the server request

    objRequest.open("GET", url, true);

    objRequest.send();


}


function GenerateOutput(result)

{

    var count = 0;

    var displaytext = "";



    //Loop to extract data from the response object

    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)

    {


        displaytext +=

result.GetOrdersForCustomerResult[count].OrderDate + ", " +

result.GetOrdersForCustomerResult[count].OrderID + ", " +

result.GetOrdersForCustomerResult[count].ShipAddress + " , " +

result.GetOrdersForCustomerResult[count].ShipCity + " , " +

result.GetOrdersForCustomerResult[count].ShipName + " , " +

result.GetOrdersForCustomerResult[count].ShipPostcode + " , " +

result.GetOrdersForCustomerResult[count].ShippedDate + "<br>";


      document.getElementById("orderdisplay").innerHTML = displaytext;


    }


}



function GetOrderHistory()

{

    var objRequest = new XMLHttpRequest();  //Create AJAX request object


    //Create URL and Query string

    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";

    url += document.getElementById("custid1").value;



    //Checks that the object has returned data

    objRequest.onreadystatechange = function()

    {

        if (objRequest.readyState == 4 && objRequest.status == 200)

        {

            var output = JSON.parse(objRequest.responseText);

            GenerateOutput2(output);


        }

    }


    //Initiate the server request

    objRequest.open("GET", url, true);

    objRequest.send();


}


function GenerateOutput2(result)

{

    var count = 0;

    var displaytext = "";



    //Loop to extract data from the response object

    for (count = 0; count < result.length; count++)

    {


        displaytext += result[count].ProductName + ", " +
result[count].Total + "<br>";


    document.getElementById("orderhistory").innerHTML = displaytext;


    }


}


function GetCustomers()

{

    var objRequest = new XMLHttpRequest();  //Create AJAX request object


    //Create URL and Query string

    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

    //url += document.getElementById("custid").value;



    //Checks that the object has returned data

    objRequest.onreadystatechange = function()

    {

        if (objRequest.readyState == 4 && objRequest.status == 200)

        {

            var output = JSON.parse(objRequest.responseText);

            GenerateOutput1(output);


        }

    }


    //Initiate the server request

    objRequest.open("GET", url, true);

    objRequest.send();


}


function GenerateOutput1(result)

{

    var count = 0;

    var displaytext = "";



    //Loop to extract data from the response object

    for (count = 0; count < result.GetAllCustomersResult.length; count++)

    {


        displaytext += result.GetAllCustomersResult[count].CustomerID + ", " +

result.GetAllCustomersResult[count].CompanyName + ", "+

result.GetAllCustomersResult[count].City + "<br>";


    document.getElementById("customers").innerHTML = displaytext;


    }


}


//function ShowSection() {

//    if (value == "1")

//    {

//        document.getElementById("getorders").style.display = '';

//        document.getElementById("allcustomers").style.display = "none";

//        document.getElementById("gethistory").style.display = "none";

//    }

//    elseif (value == "2")

//    {

//        document.getElementById("gethistory").style.display = '';

//        document.getElementById("getorders").style.display = "none";

//        document.getElementById("allcustomers").style.display = "none";

//    }

//    elseif (value == "3")

//    {

//        document.getElementById("allcustomers").style.display = 'section1';

//        document.getElementById("gethistory").style.display = 'section2';

//        document.getElementById("getorders").style.display = 'section2';

//

//    }

//}