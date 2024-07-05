
let i=0;
let ytarr=[
    ["rs=AOn4CLAOaFfRwRwU0wX5sq8Sn-VkhdPSRQ","_i-uLJAh79U","lecture 8:events in Javascript | lecture 1 by shradha khapra","Shradha Khapra","sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s176-c-k-c0x00ffffff-no-rj","4 Days ago . 91K views","_i-uLJAh79U"],
    ["amp;rs=AOn4CLCQdAGxNYmhHiReIKvP623gO6SFwQ","1c-KjlPtZXY","Aspirants and @PleaseSitDown mock interview","Prime Video","ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj","8 Days ago . 8M views","1c-KjlPtZXY"],
    ["amp;rs=AOn4CLD-zKGsbVzJ4y8LeHlYnrxnhHyJnQ","N_4MRrk5pLw","College Exams: How to get more GPA in less time?","Apna College","nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj","2 months ago . 2M views","N_4MRrk5pLw"],
    ["amp;rs=AOn4CLDkh_aLmSV6q13-wv9pFrDAFXjJKQ","HgVoDof_YDI","How to get hired as Frontend developer in 2024","Technical Suneja","f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s176-c-k-c0x00ffffff-no-rj","8 Months ago . 34K views","HgVoDof_YDI"],
    ["amp;rs=AOn4CLBLgTtQorCx9NrrZqiKzwDargi9Xg","DZ6q5X7fAmU","Dubai | Stand up comedy |","be_a_bassi","ytc/APkrFKYEHLAlbe6a_Je6ehVy9wuoZE6DCgYSEgD1SIDn2Q=s176-c-k-c0x00ffffff-no-rj","2 months ago . 4M views","DZ6q5X7fAmU"],
    ["amp;rs=AOn4CLD6lL8RXQPVYNnHWVqQ6dvBWgxnYg","lsJBGvyiAHI","UPSC Topper Mock Interview,Akshat Jain","Drishti IAS:English","ytc/APkrFKZPUaU1Zs7khzSagrd4MUJ4eZppp4QHlAbN_Wmnog=s176-c-k-c0x00ffffff-no-rj","7 months ago . 3M views","lsJBGvyiAHI"],
    ["amp;rs=AOn4CLBBRkcfTzX-Et7eFbwwuGnVW_gGAw","i0ZHTiDTS30","Meet Mr.Divyakirti | Episode 50","Sandeep Maheshwari","W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s176-c-k-c0x00ffffff-no-rj","9 months ago . 2M views","i0ZHTiDTS30"],
    ["rs=AOn4CLAOaFfRwRwU0wX5sq8Sn-VkhdPSRQ","_i-uLJAh79U","lecture 8:events in Javascript","Shradha Khapra","sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s176-c-k-c0x00ffffff-no-rj","4 Days ago . 91K views","_i-uLJAh79U"],
    ["amp;rs=AOn4CLDkh_aLmSV6q13-wv9pFrDAFXjJKQ","HgVoDof_YDI","How to get hired as Frontend developer in 2024","Technical Suneja","f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s176-c-k-c0x00ffffff-no-rj","8 Months ago . 34K views","HgVoDof_YDI"],
    ["amp;rs=AOn4CLBLgTtQorCx9NrrZqiKzwDargi9Xg","DZ6q5X7fAmU","Dubai | Stand up comedy |","be_a_bassi","ytc/APkrFKYEHLAlbe6a_Je6ehVy9wuoZE6DCgYSEgD1SIDn2Q=s176-c-k-c0x00ffffff-no-rj","2 months ago . 4M views","DZ6q5X7fAmU"],
    ["amp;rs=AOn4CLCQdAGxNYmhHiReIKvP623gO6SFwQ","1c-KjlPtZXY","Aspirants and @PleaseSitDown mock interview","Prime Video","ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj","8 Days ago . 8M views","1c-KjlPtZXY"],
    ["amp;rs=AOn4CLD6lL8RXQPVYNnHWVqQ6dvBWgxnYg","lsJBGvyiAHI","UPSC Topper Mock Interview,Akshat Jain","Drishti IAS:English","ytc/APkrFKZPUaU1Zs7khzSagrd4MUJ4eZppp4QHlAbN_Wmnog=s176-c-k-c0x00ffffff-no-rj","7 months ago . 3M views","lsJBGvyiAHI"],
    ["amp;rs=AOn4CLBLgTtQorCx9NrrZqiKzwDargi9Xg","DZ6q5X7fAmU","Dubai | Stand up comedy |","be_a_bassi","ytc/APkrFKYEHLAlbe6a_Je6ehVy9wuoZE6DCgYSEgD1SIDn2Q=s176-c-k-c0x00ffffff-no-rj","2 months ago . 4M views","DZ6q5X7fAmU"],
    ["amp;rs=AOn4CLCQdAGxNYmhHiReIKvP623gO6SFwQ","1c-KjlPtZXY","Aspirants and @PleaseSitDown mock interview","Prime Video","ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s176-c-k-c0x00ffffff-no-rj","8 Days ago . 8M views","1c-KjlPtZXY"],
    ["amp;rs=AOn4CLD6lL8RXQPVYNnHWVqQ6dvBWgxnYg","lsJBGvyiAHI","UPSC Topper Mock Interview,Akshat Jain","Drishti IAS:English","ytc/APkrFKZPUaU1Zs7khzSagrd4MUJ4eZppp4QHlAbN_Wmnog=s176-c-k-c0x00ffffff-no-rj","7 months ago . 3M views","lsJBGvyiAHI"],
    ["amp;rs=AOn4CLBBRkcfTzX-Et7eFbwwuGnVW_gGAw","i0ZHTiDTS30","Meet Mr.Divyakirti | Episode 50","Sandeep Maheshwari","W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s176-c-k-c0x00ffffff-no-rj","9 months ago . 2M views","i0ZHTiDTS30"],
    ["rs=AOn4CLAOaFfRwRwU0wX5sq8Sn-VkhdPSRQ","_i-uLJAh79U","lecture 8:events in Javascript","Shradha Khapra","sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s176-c-k-c0x00ffffff-no-rj","4 Days ago . 91K views","_i-uLJAh79U"],
    ["amp;rs=AOn4CLDkh_aLmSV6q13-wv9pFrDAFXjJKQ","HgVoDof_YDI","How to get hired as Frontend developer in 2024","Technical Suneja","f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s176-c-k-c0x00ffffff-no-rj","8 Months ago . 34K views","HgVoDof_YDI"],
    ["amp;rs=AOn4CLBLgTtQorCx9NrrZqiKzwDargi9Xg","DZ6q5X7fAmU","Dubai | Stand up comedy |","be_a_bassi","ytc/APkrFKYEHLAlbe6a_Je6ehVy9wuoZE6DCgYSEgD1SIDn2Q=s176-c-k-c0x00ffffff-no-rj","2 months ago . 4M views","DZ6q5X7fAmU"]
]

let len=ytarr.length;
let text="";

for(;i<len;i++){
    text +=`
    <div class="video">
          <a href="https://www.youtube.com/watch?v=`+ytarr[i][1]+`" target="_blank">
          <img alt="" style="background-color: transparent;" class="thumbnail" src="https://i.ytimg.com/vi/`+ytarr[i][6]+`/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&`+ytarr[i][0]+`">
          <div class="content">
            <img src="https://yt3.ggpht.com/`+ytarr[i][4]+`" class="channel-icon">
            <div class="info">
              <h4 class="title">`+ytarr[i][2]+`</h4>
              <p class="channel-name">`+ytarr[i][3]+`</p>
              <p class="channel-views">`+ytarr[i][5]+`</p>
            </div>
          </div>
         </a>
        </div>
    `
}

document.getElementById("ytvideo").innerHTML=text;



    var hiddendiv = document.querySelector(".sidebar");
    var smalldiv=document.querySelector(".side");
    //taking sidebar 0 and smalldiv  as 118px
function unhideDiv() {
    if(hiddendiv.style.width==="0px"){
        hiddendiv.style.width="216px";
        smalldiv.style.width="0px";
    }else{
        smalldiv.style.width="116px";
        hiddendiv.style.width="0px";
    }
}

var dropp=document.querySelector(".dropdown");

function dropdiv() {
    // Check if the width is not set or is "0%"
    if (!dropp.style.width || dropp.style.width === "0%") {
        dropp.style.width = "25%";
    } else if (dropp.style.width === "25%") {
        dropp.style.width = "0%";
    }
    if (!dropp.style.display || dropp.style.display === "none") {
        dropp.style.display = "block";
    } else if (dropp.style.display === "block") {
        dropp.style.display = "none";
    }
}


