module.exports = ({ name, quantity,quantity1,description,description1,productName,productName1,price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <title>PDF Result Template</title>

          <style>
          body{
             font-size:10px;
             counter-reset: my-sec-counter;
          }
          
         h2::before {
           /* Increment "my-sec-counter" by 1 */
           counter-increment: my-sec-counter;
           content: "Invoice# " counter(my-sec-counter) ". ";
         }
          }
          
        a{
           text-decoration:none;
           color:black;
           font-weight:bold;
         
        }
        .padding{
            padding:2rem !important;
        }
          </style>
       </head>
       <body>
       <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 padding">
       <div class="card">
       <div class="card-header p-4">
      <h3> <a href="#" class="pt-2 d-inline-block">Raven Technolabs</a></h3>
       <div>
       <h2 class="mb-0"></h2>
       Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
       </div>
       </div>
       <div class="card-body>
       <divclass="row mb-4">
       <div class="col-sm-6">
       <h5 class="mb-3">From:</h5>
       <h5 class="text-dark mb-1">Raven technolabs</h5>
       <div>office-802,Rajhans Tower,</div>
       <div>B/H Shreyansh Trade Center,</div>
       <div>Varachha Road,Surat-395006,</div>
       <div>+91 846956543</div>
       <div>raventechnolabs54@gmail.com</div>
       </div>
       <div class="col-sm-6">
       <h5 class="mb-3">To:</h5>
       <h5 class="text-dark mb-1">${name}</h5>
       <div>office-802,Rajhans Tower,</div>
       <div>B/H Shreyansh Trade Center,</div>
       <div>+91 846956543</div>
       <div>tuhit54@gmail.com</div>
       </div>
       
       </div>
       <hr>
       <div class="center">
       <p> Dear ${name},</p>
       <p> Please find below a cost-breakdown for the recent work completed.Please make a payment at your earliest convinence,and do not heistate to contact me with any question.</p>
       <p>Many thansk,</p>
       </p>Raven Technolabs</p>
       <p>Reciept Id:${receiptId}</p>
       </div>
       <div class="table-responsive-sm">
       <table class="table table-stripped">
       <thread>
       <tr>
       <th class="center">#</th>
       <th>item</th>
       <th>Description</th>
       <th class="right">Price</th>
       <th class="center">Qty</th>
       <th class="right">Total</th>
       </tr>
       <thread>
       <tbody>
       <tr>
       <td class="center">1</td>
       <td class="left strong">Product name</td>
       <td class="left">${description}</td>
       <td class="right">${price1}</td>
       <td class="center">${quantity}</td>
       <td class="right">${parseInt(price1) * parseInt(quantity)}$</td>
       
       </tr>
       <tr>
       <td class="center">2</td>
       <td class="left strong">${productName1}</td>
       <td class="left">${description1}</td>
       <td class="right">${price2}</td>
       <td class="center">${quantity1}</td>
       <td class="right">${parseInt(price2) * parseInt(quantity1)}$</td>
       
       </tr>
       <tr>
       <td class="center">3</td>
       
       </tr>
       <tr>
       <td class="center">4</td>
       
       </tr>
       <tr>
       <td class="center">5</td>
       
       </tr>
       </tbody>
       </table>
       </div>
       <div class="row"></div>
       <div class="col-lg-4 col-sm-5 ml-auto">
       <table class="table table-clear">
       <tbody>
       <tr>
       <td class="left">
       <strong class="text-dark">Subtotal</strong>
       <td class="right">${parseInt(price1) + parseInt(price2)}$</td>
       </td>
       </tr>
       </tbody>
       </table>
       </div>
       </div>
       </div>
       <div class="card-footer bg-white">
       <p class="mb-0">Many thanks for your custom! I look forward to doing business with you again in due course</p>
       <p class="mb-0">Payment terms:to be received within 60 days<p>
       </div>
       <div>
       
       </body>
    </html>
    `;
};
