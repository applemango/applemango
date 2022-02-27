//自動でプロジェクトを取得する予定だったがCORSの関係で手動になった。



const project_list = document.getElementById("scratch_project_list")
var inner_project = []
//"?fps=240"
function add_inner_project(id,title,comment,type) {
    if (type == 1) {
        var tmp = "?fps=240"
    } else if(type == 2) {
        var tmp = "?fps=240&hqpen"
    } else {
        var tmp = ""
    }
    inner_project += [
        "<a href='https://turbowarp.org/"+String(id)+tmp+"' target='_blank'>"+
        "<div class='scratch_project'>"+
            "<img src='https://cdn2.scratch.mit.edu/get_image/project/"+String(id)+"_200x200.png'>"+
            "<div class=''>"+
              "<h4 class='scratch_project_title'>"+title+"</h4>"+
              "<p class='scratch_project_comment'>"+comment+"</p>"+
            "</div>"+
        "</div>"+
      "</a>"
    ]

}

project = [
    {
        id:651175953,
        title:"ui demo 1 (color)",
        comment:"uiの使用例"
        ,type:1
    },
    {
        id:588675380,
        title:"tic tac toe",
        comment:"一人用の三目並べ"
        ,type:2
    },
    {
        id:630930718,
        title:"scpr v0.1.6.6sb3",
        comment:"scratchで独自言語の実行(上の旗(停止ボタンの横)を押さないと固まる"
        ,type:2
    },
    {
        id:588589394,
        title:"OS 100%pen",
        comment:"os"
        ,type:2
    },
    {
        id:592866752,
        title:"[100%pen]Animation Creation ",
        comment:"コマンド形式での描写のテスト"
        ,type:2
    },
    {
        id:628146703,
        title:"ui-ct-s v1",
        comment:"独自言語用の描写エンジン"
        ,type:2
    },
    {
        id:615761086,
        title:"ui-ct6-test",
        comment:"コマンド形式での実行テスト"
        ,type:2
    },
    {
        id:625385460,
        title:"ui-ct7.4",
        comment:"独自言語のテスト(覚えてない"
        ,type:2
    },
    {
        id:599403628,
        title:"pi",
        comment:"グラフのテスト"
        ,type:2
    },
    {
        id:599403008,
        title:"ui-ct",
        comment:"忘れた"
        ,type:2
    },
    {
        id:598552798,
        title:"gui-ct",
        comment:"忘れた"
        ,type:2
    },
]

for(let i = 0; i < project.length; i++) {
    add_inner_project(project[i].id,project[i].title,project[i].comment,project[i].type)
}




project_list.innerHTML = inner_project
