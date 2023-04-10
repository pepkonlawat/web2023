<template>
  <div class="Info">
    <div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">City Name</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p><b>Location:</b> (latitude,longitude)</p>
                <p><b>Pressure:</b> pressure</p>
                <p><b>Main Weather:</b>Main Weather</p>
              </div>
              <div class="col-xs-86col-sm-6 col-md-6 col-lg-6">
                <p><b>Temperature:</b> Temperature</p>
                <p><b>Humidity:</b> Humidity</p>
                <p><b>Description:</b> Description</p>
              </div>
            </div>
            <div class="row">
              <img :src="``" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
  </div>
</template>
