import './form.css';
var form = document.getElementById("form");
var table = document.getElementById("table");

form.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();


    var userid = document.getElementById("username").value;


    var password = document.getElementById("password").value;


    var username = document.getElementById("fname").value;




    var row = table.insertRow(2);
    
    var customerCell = row.insertCell(0);
    customerCell.innerHTML = userid;

    var ItemCell = row.insertCell(1);
    ItemCell.innerHTML = password;

    var quantityCell = row.insertCell(2);
    quantityCell.innerHTML = username

    //var DeleteCell = row.insertCell(4);
   /// DeleteCell.innerHTML = x;
}

const Register=() =>{
    return(
        <div class="container">
            <form id="form">
                <h1> Registaration Form</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-10">
                            <label >User ID</label>
                        </div>
                        <div class="col-90">
                            <input type="text" id="username" name="firstname" placeholder="Required and must be length of 5 to 12"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="password">Password:</label>
                        </div>
                        <div class="col-90">
                            <input type="password" id="password" name="password" maxLength="12" placeholder="Required and must be length of 7 to 12"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="fname">Name</label>
                        </div>
                        <div class="col-90">
                            <input type="text" id="fname" name="firstname" placeholder="Required and alphabets only"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="address">Address:</label>
                        </div>
                        <div class="col-90">
                            <input name="address" id="address" type="text" placeholder="optional"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="Country" required >Country</label>
                        </div>
                        <div class="col-90">
                            <select name="Country" id="Country">
                                <option value=" ">Select Country</option>
                                <option value="0">India</option>
                                <option value="1">Japan</option>
                                
                            </select>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="pincode">ZIP CODE</label>
                        </div>
                        <div class="col-90">
                            <input type="number" id="pin" name="pin" maxLength="6" placeholder="Required must be numeric"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="email">Email:</label>
                        </div>
                        <div class="col-90">
                            <input type="email" id="email" name="email" placeholder="Required must be valid gmail"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="gender" required>Gender:</label>
                        </div>
                        <div class="col-90">
                            <input type="radio" id="male" name="gender" value="male"/>Male 
                            <input type="radio" id="female" name="gender" value="female"/>Female
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="specialization">Language</label>
                        </div>
                        <div class="col-90">
                            <input type="checkbox" class="specialization" id="english" name="specialization[]" value="English"/>English
                            <input type="checkbox" class="specialization" id="non english" name="specialization[]" value="NON-English"/> Non-English <br/>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <label for="phone">Phonenumber</label>
                        </div>
                        <div class="col-90">
                            <input type="tel" class="telephonenumber" id="phone"/>

                        </div>
                    </div>    
                    
                    <div class="row">
                        <div class="col-10">
                            <label for="about">About:</label>
                        </div>
                        <div class="col-90">
                            <textarea name="about" id="about" cols="30" rows="10" placeholder="optional"></textarea>
                        </div>
                    </div> 
                
                
                    <div class="row">
                        <div class="col-90">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>  
                </div> 
            </form>
          
        <div class="record-container" id="container">
            <table id="table">
                <tr>
                    <th>User ID</th>
                    <th>Password</th>
                    <th>Name</th>
                    
                </tr>

                <tr>
                    <td>bathala123</td>
                    <td>abdc45</td>
                    <td>Suchi</td>
                    <td class="deleteTable"><button>x</button></td>
                </tr>
            </table>
        </div>
    </div>
    );

};
export default Register;