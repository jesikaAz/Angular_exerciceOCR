import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Mon premier Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam porta leo vulputate ullamcorper eu vel elit. Mauris mollis nisl eu velit tincidunt, et ultrices neque pharetra.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxieme Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam porta leo vulputate ullamcorper eu vel elit. Mauris mollis nisl eu velit tincidunt, et ultrices neque pharetra. ",
      loveIts: 1,
      created_at: ""
    },
    {
      title: "Encore un Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam porta leo vulputate ullamcorper eu vel elit. Mauris mollis nisl eu velit tincidunt, et ultrices neque pharetra.",
      loveIts: 1,
      created_at: ""
    }
  ];
}
