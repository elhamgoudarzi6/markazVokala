import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';
import { MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [MessageService],
})
export class TeamComponent implements OnInit {
  data: TreeNode[];
  data1: TreeNode[];
  AllMember: any[] = [];
  selectedNode: TreeNode;
  row1: any[] = [];
  row2: any[] = [];
  row3: any[] = [];
  row4: any[] = [];
  members: any[] = [];
  children: TreeNode[];
  root: TreeNode[] = [];
  // sub: TreeNode[] = [];
  // subSub: TreeNode[] = [];
  // subSubSub: TreeNode[] = [];



  constructor(private service: LayoutService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.service.getAllMember().subscribe((response) => {
      if (response['success'] === true) {
        this.members = response['data'];
        this.members.forEach((item) => {
          if (item.level === 1) {
            this.row1.push(item);
          }
          if (item.level === 2) {
            this.row2.push(item);
          }
          if (item.level === 3) {
            this.row3.push(item);
          }
          if (item.level === 4) {
            this.row4.push(item);
          }
        })
      }
    });

    // this.service.getAllMember().subscribe((response) => {
    //   if (response.success === true) {
    //     this.members = response.data;

    //     let subSubSubList: TreeNode[]=[];
    //     let subSubList: TreeNode[]=[];
    //     let subList: TreeNode[]=[];

    //     this.members.forEach((item) => {
        //   if (item.level === 4) {
        //     subSubSubList.push({
        //       label: item.role,
        //       type: 'person',
        //       styleClass: 'p-person',
        //       data: { name: item.fullName, 'avatar': item.image },
        //       expanded: true,
        //     });
        //   }

        //   if (item.level === 3) {
        //     subSubList.push({
        //       label: item.role,
        //       type: 'person',
        //       styleClass: 'p-person',
        //       data: { name: item.fullName, 'avatar': item.image },
        //       expanded: true,
        //       children: subSubSubList
        //     });
        //   }

        //   if (item.level === 2) {
        //     subList.push({
        //       label: item.role,
        //       type: 'person',
        //       styleClass: 'p-person',
        //       data: { name: item.fullName, 'avatar': item.image },
        //       expanded: true,
        //      // children: subSubList
        //     });
        //   }

        //   if (item.level === 1) {
        //     this.root.push({
        //       label: item.role,
        //       type: 'person',
        //       styleClass: 'p-person',
        //       data: { name: item.fullName, 'avatar': item.image },
        //       expanded: true,
        //       children: subList
        //     });
        //   }

        // })

    //   }
    // });

  




    this.data = [{
      label: 'CEO',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: { name: 'Walter White', 'avatar': 'walter.jpg' },
      children: [
        {
          label: 'CFO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
        },
        {
          label: 'COO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
      
        },
        {
          label: 'CTO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
        },
        {
          label: 'CLI',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
        }
      ]
    }];

    this.data1 = [{
      label: 'CEO',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: { name: 'Walter White', 'avatar': 'walter.jpg' },
      children: [
        {
          label: 'CFO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
          children: [{
            label: 'Tax',
            styleClass: 'department-cfo',
          },
          {
            label: 'Legal',
            styleClass: 'department-cfo'
          }],
        },
        {
          label: 'COO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
          children: [{
            label: 'Operations',
            styleClass: 'department-coo'
          }]
        },
        {
          label: 'CTO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
          children: [{
            label: 'Development',
            styleClass: 'department-cto',
            expanded: true,
            children: [{
              label: 'Analysis',
              styleClass: 'department-cto'
            },
            {
              label: 'Front End',
              styleClass: 'department-cto'
            },
            {
              label: 'Back End',
              styleClass: 'department-cto'
            }]
          },
          {
            label: 'QA',
            styleClass: 'department-cto'
          },
          {
            label: 'R&D',
            styleClass: 'department-cto'
          }]
        }
      ]
    }];



  }
  onNodeSelect(event) {
    this.messageService.add({ severity: 'success', summary: 'Node Selected', detail: event.node.label });
  }

}
