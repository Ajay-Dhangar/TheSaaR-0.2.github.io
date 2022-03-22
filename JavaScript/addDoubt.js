var searchField = document.getElementById('sf')
var list = document.getElementById("doubtlist");

function create_issue()
{
    doubtadd("MyIssue", "MyDescription");
}

function doubtadd(issue_title, issue_description)
{
    var li = document.createElement("li")
    var title = document.createElement("h3")
    var username = document.createElement("h4")
    var des = document.createElement("p")

    title_text = document.createTextNode(issue_title)
    username_text = document.createTextNode("MYUSERNAME")
    des_text = document.createTextNode(issue_description)
    
    title.appendChild(title_text)
    username.appendChild(username_text)
    des.appendChild(des_text)

    li.appendChild(username)
    li.appendChild(title)
    li.appendChild(des)

    list.append(li)

}
