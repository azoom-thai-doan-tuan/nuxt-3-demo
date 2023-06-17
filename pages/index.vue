<template>
  <div class="counter-page">
    <div>
      <div class="ng-fm-row">
        <p>Users: {{ result.users.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Number of plants: {{ result.numberOfPlants.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Number of decorations: {{ result.decors.toLocaleString() }}</p>
      </div>
      <br />
      <div class="ng-fm-row">
        <p>Chat all count: {{ result.chatAllCount.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Private chat count: {{ result.chatCount.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Rent ads count: {{ result.rentAdsCount.toLocaleString() }}</p>
      </div>
      <br />
      <div class="ng-fm-row">
        <p>Number of bidding slots: {{ result.bidding.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Number of ceiling bids: {{ result.highestBid.toLocaleString() }}</p>
      </div>
      <br />

      <div class="ng-fm-row">
        <p>Legend plants: {{ result.legendPlants.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Epic plants: {{ result.epicPlants.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Rare plants: {{ result.rarePlants.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Common plants: {{ result.commonPlants.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Mother trees: {{ result.motherTrees.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Fused plants: {{ result.fused.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Mythic 1 plants: {{ result.omega1.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Mythic 2 plants: {{ result.omega2.toLocaleString() }}</p>
      </div>
      <br />
    </div>
    <div class="section">
      <div class="ng-fm-row">
        <p>
          Remain Free tickets: {{ result.numberOfFreeTicket.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>LE tickets bought: {{ result.allLeTickets.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>
          Ticket in current round:
          {{ result.numberOfTicketInRound.toLocaleString() }}
        </p>
      </div>
      <br />

      <div class="ng-fm-row">
        <p>Flipcoin Win: {{ result.numberOfBettingWin.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Flipcoin Lose: {{ result.numberOfBettingLose.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>Flipcoin X10: {{ result.times10BettingCount.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>
          Flipcoin Win Total Amount:
          {{ result.winTotalAmount.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>
          Flipcoin Lose Total Amount:
          {{ result.loseTotalAmount.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>
          Average betting amount:
          {{ result.bettingAmountAverage.toLocaleString() }}
        </p>
      </div>
      <br />
      <div class="ng-fm-row">
        <p>
          Crow hunting throw 5:
          {{ result.crowHunt5.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>
          Crow hunting throw 10:
          {{ result.crowHunt10.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>
          Crow hunting deposit (not include 5% fee):
          {{ result.crowHuntAmount[0].income.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>
          Crow hunting reward:
          {{ result.crowHuntAmount[0].outcome.toLocaleString() }}
        </p>
      </div>
      <br />
    </div>
    <div class="section">
      <div class="ng-fm-row">
        <p>Curent convert: {{ result.currentConvert.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>
          Current convert amount:
          {{ result.currentConvertAmount.toLocaleString() }}
        </p>
      </div>
      <div class="ng-fm-row">
        <p>Checking record: {{ result.needCheckingConvert }}</p>
      </div>
      <br />
      <div class="ng-fm-row">
        <p>LE Dev pool: {{ result.leDevPool.toLocaleString() }}</p>
      </div>
      <div class="ng-fm-row">
        <p>LE treasury pool: {{ result.leTreasuryPool.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formValid } from '../schema/form'

const { data } = await useFetch('https://api.plantvsundead.com/analytics')
const result = data._value

const formData = reactive({
  fullName: 'John',
  email: 'Doe',
  message: 'Hello',
  phoneNo: '',
  service: '',
})
function submit() {
  const { success } = formValid.safeParse(formData)
  console.log(success)
}
</script>
