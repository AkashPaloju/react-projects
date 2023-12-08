

const Account = () => {
  return (
    <div className="account-div">
      <h3>Account Opening</h3>
      <form action="insert_customer.php" method="post">
        <label for="name">Customer Name:</label>
        <input id="name" name="customer-name" type="text" required /><br></br>
        <label for="city" style={{marginLeft: "78px"}}>City:</label>
        <input id="city" name="city" type="text" style={{marginTop: "20px"}} /><br></br>
        <label for="address" style={{marginLeft: "52px"}}>Address:</label>
        <textarea id="address" name="address" style={{marginTop: "20px"}}></textarea><br />
        <input type="submit" style={{margin: "20px 30px 0px 124px"}} />
        <input type="reset" />
      </form>
    </div>

  )
}

export default Account ;

