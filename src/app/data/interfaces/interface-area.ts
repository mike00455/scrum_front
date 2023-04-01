export interface Area{

  areaId: string;
  areaName: string;
  employees:[{
    empId:string;
  }],
  teams: [
    {
      areaId: string;
      employees: [
        {
          empId: string;
        }
      ],
      teamId: string;
      teamName: string;
    }
  ]

}
