document.getElementById('testForm').addEventListener('submit',submitForm);
  function submitForm(e)
  {
      // When Person will click createContent this code will be called
      var fname=getInputVal('firstname');
      var lname=getInputVal('lastname');
      var channelName=getInputVal('profession');
      var email=getInputVal('email');
      var content=getInputVal('content');

      console.log(fname+" "+lname+" "+channelName+" "+email+" "+content);
      alert("Content Created Sucessfully");
  }

  function getInputVal(id)
  {
      return document.getElementById(id).value;
  }

