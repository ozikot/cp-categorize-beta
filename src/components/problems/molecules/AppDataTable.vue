<template>
  <div class="entire-datatable">
    <div class="outliner">
      <v-toolbar color="#112B42"
                 dark
                 flat
                 height="30px">
        <v-icon>
          list
        </v-icon>
        <v-toolbar-title>
          {{ categoryName }}
        </v-toolbar-title>
        <v-spacer>
        </v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        </v-toolbar-items>
      </v-toolbar>
      <v-data-table :headers="headers"
                    :hide-actions="true"
                    :items="problems"
                    class="elevation-1">
        <template slot="headerCell"
                  slot-scope="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on">
                {{ props.header.text }}
              </span>
            </template>
            <span>
              {{ props.header.detail }}
            </span>
          </v-tooltip>
        </template>
          <template v-slot:items="props">
            <tr @click.right.prevent="say(1)"
                @click.left="jump(props.item.href)">
              <td class="text-xs-left">
                {{ props.item.site }}
              </td>
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">
                {{ props.item.score }}
              </td>
              <td class="text-xs-left">
                {{ props.item.intuition }}
              </td>
            </tr>
          </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'site',
            align: 'center',
            sortable: true,
            value: 'site',
            detail: 'サイト名'
          },
          {
            text: 'title',
            align: 'center',
            sortable: false,
            value: 'name',
            detail: 'AIZU ONLINE JUDGE: [番号]:[問題名], AtCoder: [コンテスト名]-[ID]:[問題名], CODEFORCES: [コンテスト番号]-[ID]'
          },
          { 
            text: 'score',
            align: 'center',
            sortable: true, 
            value: 'score',
            detail: '配点 (各サイトに準拠した点数)　※無記載・特殊な場合は0'
          },
          { 
            text: 'intuition',
            align: 'center',
            sortable: true, 
            value: 'intuition',
            detail: '私の体感配点 (AtCoder配点基準)'
          }
        ],
      }
    },
    props: {
      categoryDetail: {
        type: String
      },
      categoryName: {
        type: String
      },
      categoryTitle: {
        type: String
      },
      problems: {
        type: Array
      }
    },
    pagination: {},
    methods:{
      jump(a){
        window.open(a, '_blank')
      },
      say(a){
        alert(a)
      }
    },
  }
</script>

<style>
.entire-datatable {
  width: 85%;
  margin: auto;
}

.entire-datatable {
  margin: 3em auto;
  padding: 0.05em;
  width: 85%;
  border: 1px solid #ccc;
}
</style>
