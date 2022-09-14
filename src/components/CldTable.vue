<template>
  <table class="cld-table">
    <slot name="head">
      <thead 
        v-if="head"
        class="cld-table__thead"
      >
        <tr>
          <th
            v-for="(th, thIndex) in head"
            :key="`table-th-${thIndex}`"
            :class="[
              'cld-table__th',
              `cld-table__th--${(th.align) ? th.align : 'center'}`,
              (th.modificator) ? `cld-table__th--${th.modificator}` : false
            ]"
          >
            {{ th.title }}
          </th>
        </tr>
      </thead>
    </slot>

    <slot>
      <tbody
        v-if="body"
        class="cld-table__tbody"
      >
        <tr
          v-for="(tr, trIndex) in body"
          :key="`table-tr-${trIndex}`"
          :class="[
            'cld-table__tr',
            (tr.modificator) ? `cld-table__tr--${tr.modificator}` : false
          ]"
        >
          <td
            v-for="(td, tdIndex) in tr.items"
            :key="`table-td-${trIndex}-${tdIndex}`"
            v-html="td.value"
            :class="[
              'cld-table__td',
              `cld-table__td--${td.align}`,
              (td.modificator) ? `cld-table__td--${td.modificator}` : false
            ]"
          ></td>
        </tr>
      </tbody>
    </slot>

    <slot name="foot">
      <tfoot
        v-if="foot"
        class="cld-table__foot"
      >
        <tr
          v-for="(tr, trfIndex) in foot"
          :key="`table-trf-${trfIndex}`"
        >
          <td
            v-for="(tdf, tdfIndex) in trow"
            :key="`table-tdf-${trfIndex}-${tdfIndex}`"
            :class="[
              'cld-table__td',
              'cld-table__td--foot',
              `cld-table__td--${tdf.align}`,
              (tdf.modificator) ? `cld-table__td--${tdf.modificator}` : false
            ]"
          >
            {{ tdf.value }}
          </td>
        </tr>
      </tfoot>
    </slot>
  </table>
</template>

<script>
export default {
  name: 'CldTable',

  props: {
    head: {
      type: Array,
      required: false,
      default: () => []
    },
    body: {
      type: Array,
      required: false,
      default: () => []
    },
    foot: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.cld-table {
  border-spacing: 0;

  &__th, &__td {
    padding: 4px 8px;
  }

  &__th {
    color: $cTextWhite;

    background-color: $cAccent;
    border: {
      width: 0 1px 0 0;
      style: solid;
      color: $cWhite
    } 

    &:last-child {
      border-color: $cAccent;
    }

    &--center {
      text-align: center;
    }
  }

  &__td {
    border: {
      width: 0 1px 1px 0;
      style: solid;
      color: $cBorder;
    }

    &:first-child {
      border-left-width: 1px;
    }

    &--center {
      text-align: center;
    }

    &--bold {
      font-weight: 700;
    }
  }
}
</style>