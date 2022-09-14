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
            title: 'Обязательное'
          },
          {
            title: 'По-умолчанию'
          },
          {
            title: 'Описание'
          }
        ],
        body: [
          {
            modificator: 'hightlight',
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: `v-model`,
              },
              {
                align: 'center',
                value: `String, Number`,
              },
              {
                align: 'center',
                value: `-`,
              },
              {
                align: 'center',
                value: `-`,
              },
              {
                value: `Модель`,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'name',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `'cld-input'`,
              },
              {
                value: `
                  Аттрибут [name]. На его основании строится значние по-умолчанию 
                  для vue-аттрибута [ref].
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'label',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `''`,
              },
              {
                value: `Значения тега подписи "label"`,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'type',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `'string'`,
              },
              {
                value: `
                  Тип поля. Допустимые значения:<br>
                  <ul>
                    <li><strong>string</strong> - Обычное поле ввода с аттрибутом [type="text"]</li>
                    <li><strong>text</strong> - Поле ввода становится текстовым полем "textarea".</li>
                    <li><strong>password</strong> - Поле ввода с аттрибутом [type="password"].</li>
                    <li><strong>number</strong> - Поле ввода с аттрибутом [type="number"].</li>
                  </ul>
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'cols',
              },
              {
                align: 'center',
                value: `Number`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `0`,
              },
              {
                value: `
                  <strong>Только для типа "text".</strong><br/>
                  Количество стобцов для "textarea".
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'rows',
              },
              {
                align: 'center',
                value: `Number`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `0`,
              },
              {
                value: `
                  <strong>Только для типа "text".</strong><br/>
                  Количество строк для "textarea".
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'showMessage',
              },
              {
                align: 'center',
                value: `Boolean`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `false`,
              },
              {
                value: `Показывать ли сообщение.`,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'refName',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `''`,
              },
              {
                value: `Кастомное значение vue-аттрибута [ref].`,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'tabindex',
              },
              {
                align: 'center',
                value: `Number`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `0`,
              },
              {
                value: `Порядковое значение переключения фокуса.`,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'buttons',
              },
              {
                align: 'center',
                value: `Boolean`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `false`,
              },
              {
                value: `
                  <strong>Только для типа "number".</strong><br>
                  Включить ли кнопки прибавления/отнимания.
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'step',
              },
              {
                align: 'center',
                value: `Number`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `1`,
              },
              {
                value: `
                  <strong>Только для типа "number".</strong><br>
                  Шаг прибавления/отнимания значения.
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'min',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `''`,
              },
              {
                value: `
                  <strong>Только для типа "number".</strong><br>
                  Минимальное допустимое значение.
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'max',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `''`,
              },
              {
                value: `
                  <strong>Только для типа "number".</strong><br>
                  Максимальное допустимое значение.
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'caption',
              },
              {
                align: 'center',
                value: `String`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `''`,
              },
              {
                value: `
                  Дополнительная подпись к полю.
                `,
              }
            ]
          },
          {
            items: [
              {
                align: 'center',
                modificator: 'bold',
                value: 'copyButton',
              },
              {
                align: 'center',
                value: `Boolean`,
              },
              {
                align: 'center',
                value: `нет`,
              },
              {
                align: 'center',
                value: `false`,
              },
              {
                value: `
                  <strong>Только для типа "text".</strong><br>
                  Показывать ли кнопку копирования текста.
                `,
              }
            ]
          },
        ]
      },
    }
  }
}
</script>