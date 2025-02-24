import Stats from "./Stats"
import Loading from "../../ui/Loading"
import useProposals from "../proposals/useProposals"
import DashboardHeader from "../../ui/DashboardHeader";
import StatisticsChart from "../../ui/StatisticsChart";
import DoughnutChart from "../../ui/DoughnutChart";
import DashboardTitle from "../../ui/DashboardTitle";
import HorizontalBarChart from "../../ui/HorizontalBarChart";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { FiTrash } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";


function Dashboard() {
    
    const {isLoading, proposals} = useProposals();   
    if(isLoading) return <Loading />

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      values: [400, 559, 380, 181, 456, 567],
    };

    const finnData = [
      {
        title: "شرکت آریا وب",
        description: "یک شرکت پیشرو در زمینه طراحی و توسعه وبسایت",
        date: "2025-02-17",
        amount: "3000000",
        status: "success",
      },
      {
        title: "شرکت تجارت شرق",
        description: "یک شرکت معتبر در زمینه صادرات و واردات کالاها",
        date: "2025-03-20",
        amount: "350000",
        status: "error",
      },
      {
        title: "شرکت ساخت و ساز نوین",
        description: "یک شرکت بزرگ در حوزه ساختمان‌سازی و عمران",
        date: "2025-04-25",
        amount: "4000000",
        status: "error",
      },
      {
        title: "شرکت فناوری اطلاعات بهار",
        description: "یک شرکت برجسته در ارائه خدمات فناوری اطلاعات",
        date: "2025-05-30",
        amount: "450000",
        status: "success",
      },
    ];
    

  return (
    <div>
      <div className="p-8 overflow-y-auto max-w-screen-xl bg-bgT text-textT sm:mx-12 m-6 rounded-md shadow-sm">
      <DashboardTitle title="آمار کلی" subTitle="در یک نما خلاصه ای از آمار خود را ببینید" />
        <Stats proposals={proposals} />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-x-10">
        <div className="p-8 overflow-y-auto bg-bgT text-textT my-6 sm:mr-12 mx-6 rounded-md shadow-sm sm:w-2/3">
          <DashboardTitle title="گزارش مالی  ماههای اخیر" subTitle="در این قسمت آمار مربوط به ماه های سال را ببینید." />
          <StatisticsChart data={data} /> 
        </div>
        <div className="p-8 overflow-y-auto bg-bgT text-textT m-6 sm:ml-12 rounded-md shadow-sm sm:w-1/3">
          <DashboardTitle title="تراکنش های مالی" subTitle="در این قسمت تراکنش ها را ببینید." />
          <div className="flex flex-col gap-y-8">
            <div className="flex justify-between">
              <h4>
                شرکت تجارت شرق 

              </h4>
              <span className="text-green-500">  
                {toPersianNumbersWithComma(300000) }
                تومان
                +
              </span>
            </div>
            <div className="flex justify-between">
              <h4>
                شرکت سامان 
              </h4>
              <span className="text-green-500">  
                {toPersianNumbersWithComma(400000) }
                تومان
                +
              </span>
            </div>
            <div className="flex justify-between">
              <h4>
                شرکت وب نوین
              </h4>
              <span className="text-red-500">  
                {toPersianNumbersWithComma(560000) }
                تومان
                -
              </span>
            </div>
            <div className="flex justify-between">
              <h4>
                شرکت آریا 
              </h4>
              <span className="text-green-500">  
                {toPersianNumbersWithComma(300000) }
                تومان
                +
              </span>
            </div>
            <div className="flex justify-between">
              <h4>
                شرکت پارسیان سپهر
              </h4>
              <span className="text-red-500">  
                {toPersianNumbersWithComma(300000) }
                تومان
                -
              </span>
            </div>
            <div className="flex justify-between">
              <h4>
                  شرکت مهر ورزین 
              </h4>
              <span className="text-green-500">  
                {toPersianNumbersWithComma(300000) }
                تومان
                +
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 overflow-y-auto max-w-screen-xl bg-bgT text-textT sm:mx-12 m-6 rounded-md shadow-sm">
        <DashboardTitle title="آخرین تراکنش ها" subTitle="آخرین تسک ها درخواست ها و لیست تراکنش های خود را ببینید." />
        <div>
        <Table>
          <Table.Header>
              <th>#</th>
              <th>عنوان شرکت</th>
              <th>تاریخ</th>
              <th>توضیحات</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>عملیات</th>
          </Table.Header>
          <Table.Body>
              {
                  finnData.map((finn, index)=>{
                      return <Table.Row key={index}>
                      <td>{index + 1}</td>
                      <td>{truncateText(finn.title, 30)}</td>
                      <td>{toLocalDateShort(finn.date)}</td>
                      <td>{truncateText(finn.description, 80)}</td>
                      <td>{toPersianNumbersWithComma(finn.amount)} تومان</td>
                      <td>
                          {finn.status === "success" ? (<span className="badge badge--success">موفق</span>) : (<span className="badge badge--error">ناموفق</span>)}
                      </td>
                      <td>
                        <div className="flex gap-x-2 text-txtD">
                          <FiTrash />
                          <FaLink />
                        </div>
                      </td>
                  </Table.Row>     
                  })
              }
          </Table.Body>
        </Table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
