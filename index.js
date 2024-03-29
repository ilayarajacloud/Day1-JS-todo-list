const form = document.getElementById("form");
const textarea = document.getElementById("input");
const msg = document.getElementById("msg")
let posts = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "Please Enter";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};
const acceptData = () => {
  data["text"] = textarea.value;
  createPost();
};

const createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  textarea.value = "";
};

const deletePost=(e)=>{
  e.parentElement.parentElement.remove();
}

const editPost=(e)=>{
  textarea.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}
