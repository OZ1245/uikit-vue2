<template>
  <article class="input-description">
    <p class="input-description__text">
      -- TODO: text --
    </p>

    <div class="input-description">
      <cld-table
        :head="tableData.head"
        :body="tableData.body"
      ></cld-table>
    </div>
  </article>
</template>

<script>
import CldTable from '@/components/CldTable'

export default {
  name: 'InputViewDescription',

  components: {
    CldTable
  },

  data() {
    return {
      tableData: {
        head: [
          {
            title: 'Параметр'
          },
          {
            title: 'Тип'
          },
          {
            title: 'Описание'
          }
        ],
        body: [
          {
            modificator: 'model',
            items: [
              {
                align: 'center',
                value: `v-model`,
              },
              {
                align: 'center',
                value: `String, Number`,
              },
              {
                value: `Модель`,
              }
            ]
          }
        ]
      },
    }
  }
}
</script>