<template>
  <nav class="navigation">
    <ul class="navigation__sections-list">
      <li
        v-for="(section, sectionIndex) in sections"
        :key="`navigation-section-${sectionIndex}`" 
        class="navigation__section"
      >
        <a 
          role="button"
          class="navigation__section-title"
          @click.stop="activeSection = (activeSection !== sectionIndex) ? sectionIndex : null"
        >
          {{ section.title }}
          <chevron-down-icon 
            :class="[
              'navigation__section-icon',
              { 'navigation__section-icon--up': sectionIndex === activeSection}
            ]" 
          />
        </a>

        <ul
          v-show="sectionIndex === activeSection"
          v-for="(item, itemIndex) in section.menu"
          :key="`menu-item-${itemIndex}`" 
          class="menu">
          <li class="menu__item">
            <cld-link 
              :link="item.link"
              type="primary"
              class="menu__link"
            >
              {{ item.title }}
            </cld-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/outline'
import CldLink from '@/components/CldLink'

export default {
  name: 'DemoNavigation',

  components: {
    ChevronDownIcon,
    CldLink
  },

  data() {
    return {
      activeSection: null,
      sections: [
        {
          title: 'Форма',
          menu: [
            {
              title: 'Поле ввода',
              link: '/input',
            }
          ]
        },
        {
          title: 'Общее',
          menu: [
            {
              title: 'Типографика',
              link: '/typography',
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  padding: 16px;

  &__sections-list {
    @include tList();

    width: 100%;
  }

  &__section {
    @include tText();

    width: 100%;
    margin-bottom: 8px;
  }

  &__section-title {
    display: inline-flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    margin-bottom: 0;
    cursor: pointer;
  }

  &__section-icon {
    @include Size(16px);

    transition: transform .15s;

    &--up {
      transform: rotate(180deg);
    }
  }

  .menu {
    margin-top: 8px;
    padding-left: 16px;

    &__item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>