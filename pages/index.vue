<template>
  <div class="counter">
    <div class="ng-fm-row">
      <p>Users: {{ result.users.toLocaleString() }}</p>
    </div>
    <div class="ng-fm-row">
      <p>Number of plants: {{ result.numberOfPlants.toLocaleString() }}</p>
    </div>
    <!-- <div class="ng-fm-row">
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
    </div> -->
    <div class="ng-fm-row">
      <p>Mother trees: {{ result.motherTrees.toLocaleString() }}</p>
    </div>
    <!-- <div class="ng-fm-row">
      <p>Old plants: {{ result.oldPlants.toLocaleString() }}</p>
    </div>
    <div class="ng-fm-row">
      <p>Old lands: {{ result.oldLands.toLocaleString() }}</p>
    </div> -->
    <br>
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
        Flipcoin Win Total Amount: {{ result.winTotalAmount.toLocaleString() }}
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
    <br>
    <div class="ng-fm-row">
      <p>LE Dev pool: {{ result.leDevPool.toLocaleString() }}</p>
    </div>
    <div class="ng-fm-row">
      <p>LE treasury pool: {{ result.leTreasuryPool.toLocaleString() }}</p>
    </div>
    <br>
    <div class="ng-fm-row">
      <p>Curent convert: {{ result.currentConvert }}</p>
    </div>
    <div class="ng-fm-row">
      <p>Current convert amount: {{ result.currentConvertAmount }}</p>
    </div>
    <div class="ng-fm-row">
      <p>Checking record: {{ result.needCheckingConvert }}</p>
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
