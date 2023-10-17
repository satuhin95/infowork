let urlParams2 = new URLSearchParams(window.location.search);
let campID2 = urlParams2.get('id');
// console.log(campID2)

if (!campID) {
  window.location.href = '../#dashboardCampaign'
}

baseURL = `http://localhost`

let formData = new FormData();
formData.append('camp_id', campID2);

fetch(`${baseURL}/dashboard-backend/getCampHeadByCampId.php`, {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => dataToDashboard(data))



function dataToDashboard(campaign) {
  totalCampClick = 0;
  totalCampImpressions = 0;
  totalCost = 0;
  totalCampClick += campaign.camp_clicks;
  totalCampImpressions += campaign.camp_impressions;
  totalCost += campaign.camp_cost;
  // console.log(data)
  // data.forEach(campaign => {

  //   // setCampaignTable(campaign)
  // });

  setValue('camp_header_title', campaign.camp_title)

  setValue('totalImpressions', totalCampImpressions)
  setValue('totalClicks', totalCampClick)
  setValue('totalCost', totalCost)

  setValue('totalCampaign', '-')
  setValue('totalCTR', ((totalCampClick / totalCampImpressions) * 100).toFixed(3))
  setValue('total_eCPM', ((totalCost / totalCampImpressions) * 1000).toFixed(4))
}



function setValue(className, value) {
  document.querySelector(`.${className}`).innerText = value;
}




fetch(`${baseURL}/dashboard-backend/getCampDeviceStatsByCampId.php`, {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => dataToDeviceTable(data))

function dataToDeviceTable(data) {
  data.forEach(campaign => {

    setDeviceTable(campaign)
  });


  $('.deviceTable_full').DataTable({
    "lengthChange": false,
    "paging":   false,
    "info":     false,
    "filter":false,
    // dom: 'Bfrtip',
    drawCallback: function () {
      var api = this.api();
      $( api.column(1).footer() ).html(
        api.column( 1 ).data().sum()
      );
      $( api.column(2).footer() ).html(
        api.column( 2 ).data().sum()
      );
      $( api.column(3).footer() ).html(
        api.column( 3 ).data().sum()
      );
    }
    // buttons: [
    //   'csv', 'excel',
    // ]
  });
}

function setDeviceTable(device) {
  let tr = document.createElement('tr');
  // tr.style.cursor = 'pointer';
  tr.innerHTML = `
  <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">${device.device_type}</td>
  <td class=" d-xl-table-cell">${device.d_impressions}</td>
  <td class=" d-xl-table-cell">${device.d_clicks}</td>
  
  <td class=" d-md-table-cell">${device.d_cost}</td>
  
  `
  // <td class=" d-md-table-cell">${ ((campaign.camp_clicks / campaign.camp_impressions) * 100).toFixed(3)}%</td>
  // <td class=" d-md-table-cell">${ ((campaign.camp_cost / campaign.camp_impressions) * 1000).toFixed(4)}</td>

  // tr.addEventListener('click',()=>{
  //   window.location.href = `../campaign/?id=${campaign.camp_id}`
  //   // console.log('first')
  // })
  document.querySelector('.deviceTable_body').append(tr)
}


// getCampAgeGenderByCampId.php

fetch(`${baseURL}/dashboard-backend/getCampAgeGenderByCampId.php`, {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => dataToAgeGenderTable(data))

function dataToAgeGenderTable(data) {
  data.forEach(campaign => {

    setAgeTable(campaign)
  });

  // $(document).ready(function() {
    $('.ageGenderTable_full').DataTable({
      // dom: 'Bfrtip',
      drawCallback: function () {
        var api = this.api();
        $( api.column(2).footer() ).html(
          api.column( 2 ).data().sum()
        );
      }
      // buttons: [
      //   'csv', 'excel',
      // ]
    });
  // });
}

function setAgeTable(data) {
  // console.log(data)
  let tr = document.createElement('tr');
  // tr.style.cursor = 'pointer';
  tr.innerHTML = `
  <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">${data.age_group}</td>
  <td class=" d-xl-table-cell">${data.gender}</td>
  <td class=" d-xl-table-cell">${data.ag_impressions}</td>
  
  
  `
  // <td class=" d-md-table-cell">${device.d_cost}</td>
  // <td class=" d-md-table-cell">${ ((campaign.camp_clicks / campaign.camp_impressions) * 100).toFixed(3)}%</td>
  // <td class=" d-md-table-cell">${ ((campaign.camp_cost / campaign.camp_impressions) * 1000).toFixed(4)}</td>

  // tr.addEventListener('click',()=>{
  //   window.location.href = `../campaign/?id=${campaign.camp_id}`
  //   // console.log('first')
  // })
  document.querySelector('.ageGenderTable_body').append(tr)
}




// getCampChannelStatsByCampId.php

fetch(`${baseURL}/dashboard-backend/getCampChannelByCampId.php`, {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => dataToChannelTable(data))

function dataToChannelTable(data) {
  data.forEach(campaign => {

    setChannelTable(campaign)
  });

  // $(document).ready(function() {
    $('.channelTable_full').DataTable({
      "order": [[ 1, "desc" ]],
      // "pageLength": 25,
      // dom: 'Bfrtip',
      drawCallback: function () {
        var api = this.api();
        $( api.column(1).footer() ).html(
          api.column( 1 ).data().sum()
        );
      }
      // ,
      // buttons: [
      //   'csv', 'excel',
      // ]
    });
  // });
}

function setChannelTable(data) {
  // console.log(data)
  let tr = document.createElement('tr');
  // tr.style.cursor = 'pointer';
  tr.innerHTML = `
  <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">${data.channel_title}</td>
  <td class=" d-xl-table-cell">${data.ch_impressions}</td>
  `
  // <td class=" d-xl-table-cell">${data.gender}</td>
  // <td class=" d-md-table-cell">${device.d_cost}</td>
  // <td class=" d-md-table-cell">${ ((campaign.camp_clicks / campaign.camp_impressions) * 100).toFixed(3)}%</td>
  // <td class=" d-md-table-cell">${ ((campaign.camp_cost / campaign.camp_impressions) * 1000).toFixed(4)}</td>

  // tr.addEventListener('click',()=>{
  //   window.location.href = `../campaign/?id=${campaign.camp_id}`
  //   // console.log('first')
  // })
  document.querySelector('.channelTable_body').append(tr)
}