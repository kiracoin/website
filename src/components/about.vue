<template>
<section>
  <div class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">About Kiracoin</h1>
        <div class="columns">
          <div class="column">
            <h4 class="title is-4">Coin Technical Specs</h4>
            <table class="table is-bordered">
              <tbody>
              <tr>
                <th>Proof</th>
                <td>Proof of Work with Masternodes</td>
              </tr>
              <tr>
                <th>Mining Algorithm</th>
                <td>x16r</td>
              </tr>
              <tr>
                <th>Block time</th>
                <td>2.5 Minutes</td>
              </tr>
              <tr>
                <th>Coin supply</th>
                <td>25 Million</td>
              </tr>
              <tr>
                <th>Masternode Collatoral</th>
                <td>1000 KIRA</td>
              </tr>
              <tr>
                <th>Coinbase Maturity</th>
                <td>100 Blocks</td>
              </tr>
              <tr>
                <th>Premine</th>
                <td>0 KIRA</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="column">
            <h4 class="title is-4">Block rewards</h4>
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Block Height</th>
                  <th>POW Reward</th>
                  <th>Masternode Reward</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(reward, index) in blockRewards" :key="index">
                <th>{{ reward.year }}</th>
                <td>{{ reward.height }}</td>
                <td>{{ reward.pow }}</td>
                <td>{{ reward.mn }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      blockRewards: [{
        year: 0, height: 0, pow: 30, mn: 0
      }, {
        year: 0.05, height: 10000, pow: 20, mn: 10
      }, {
        year: 2, height: 420480, pow: 10, mn: 5
      }, {
        year: 4, height: 840960, pow: 5, mn: 2.5
      }, {
        year: 6, height: 1261440, pow: 2.5, mn: 1.25
      }, {
        year: 8, height: 1681920, pow: 1.25, mn: 0.625
      }, {
        year: 10, height: 2102400, pow: 0.625, mn: 0.3125
      }, {
        year: 12, height: 2522880, pow: 0.3125, mn: 0.15625
      }]
    }
  }
}
</script>
