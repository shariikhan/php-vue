<template>
  <!-- eslint-disable -->
 <!-- prettier-ignore -->
    <div class="my-4">
       <div class="form-row">
           <div class="form-group col-md-12 col-sm-12">
                <button class="btn btn-success btn-sm float-right" @click="AddNew()">Add User</button>
           </div>
       </div>
       <div class="form-row">
           <div class="col-md-12 mt-4">
               <div class="table-responsive">
                <table class="table table-striped table-hover">
                   <thead>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Educ</th>

                       <th>Action</th>
                   </thead>
                   <tbody>
                   
                       <tr v-for="data in Users">
                           <td>{{data.id}}</td>
                           <td>{{data.name}}</td>
                           <td>{{data.email}}</td>
                           <table>{{data.education}}</table>
                           <td> 
                               <button class="btn btn-danger btn-sm">Delete</button>
                               <button class="btn btn-info btn-sm"  @click="editUsers(data)">Edit</button>
                               <button class="btn btn-success btn-sm">info</button>
                           </td>
                       </tr>
                   </tbody>
               </table>
               </div>
           </div>
       </div>
       <!-- add users model -->
       <div class="modal fade" id="Users" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel" v-show="!editModal">Add New Member</h5>
              <h5 class="modal-title" id="editLabel" v-show="!addModal">Update Users informations</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <form action="" method="POST">

            <div class="modal-body">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" id="name" placeholder="Name" v-model="UsersData.name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="text" name="email" class="form-control" id="email" placeholder="Email" v-model="UsersData.email" >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Highest Education</label>
                    <select name="eduction" class="form-control" id="education" v-model="UsersData.education">
                      <option v-for="ed in Education" :value="ed">
                        {{ed}}
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6 mt-4">
                    
                    Male <input type="radio" name="gander" id="gander" value="male" v-model="UsersData.gender">
                    Female <input type="radio" name="gander"  id="gander" value="Female" v-model="UsersData.gender">

                  </div>
                </div>
                
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button  type="button" class="btn btn-primary" @click="AddUsers()">Add Users</button>
            </div>
              </form>

          </div>
        </div>
      </div> 
       <!-- ad user modal end -->

       
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "users",
  data() {
    return {
      modal:null,
      editModal:false,
      addModal:true,
      Education:["Matric","Inter","bachlor","Master"],
      UsersData:{
        name:null,
        email:null,
        education:null,
        gender:null,
      },
      Users:[],
    };
  },
  created(){
  this.getUsers();
  },
  methods:{
    AddNew(){
      this.editModal=false;
      window.jQuery("#Users").modal('show');
      
    },
    AddUsers(){
      let data= new FormData();
      data.append("name" ,this.UsersData.name);
      data.append("email" ,this.UsersData.email);
      data.append("education" ,this.UsersData.education);
      data.append("gender" ,this.UsersData.gender);
      axios.post('http://localhost/youtube/php-vue/src/Api/api.php?action=addusers',data).then((res)=>{
        if(res.data.error){
          alert("Error");
        }else{
      window.jQuery("#Users").modal('hide');
      this.getUsers();
          alert(res.data.message);
        }
      }).catch((err)=>{
        console.log(err);
      })
      

    },
    getUsers(){
      axios.get('http://localhost/youtube/php-vue/src/Api/api.php?action=getuserinfo').then((res)=>{
        console.log(res.data.user_Data);
        this.Users=res.data.user_Data;
      }).catch((err)=>{
        console.log(err);
      })
    },
    editUsers(userid){
      this.editModal=true;
      this.addModal=false;


      this.UsersData =userid;
      window.jQuery("#Users").modal('show');

    }

  },
  
 
};
</script>
