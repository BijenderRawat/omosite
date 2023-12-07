import AnnouncementModal from "../../../resources/announcement/js/AnnouncementModal";
import classes from "../css/Announcement.module.css";

const Announcement = () => {
  return (
    <div className={classes.announcement_list}>
      <AnnouncementModal
        title="EMPLOYEE TRAINING"
        content="Please note that starting from August 1, 2023, there will be no Centre classes being conducted offline / online on Wednesdays. This day shall be earmarked for Coaches Learning, Team meetings, Project catchups and reviews by all managers. 

  Kesar shall be conducting trainings across OMOTEC for specific topics for coaches and trainers as well as we shall be conducting technical trainings also on such days. 
  
  Request all RMs, LMs Admins to ensure that there is sufficient communication with parents and ensure that there are no regular classes being setup. 
  
  For Competitions periods we may have to do classes which is reasonable but for all other sessions there shall be no classes. 
  "
      />
      <AnnouncementModal
        title="Unplanned Leaves"
        content="Dear All Employees 


    It is being observed that employees are taking too many leaves which is now affecting the work output and impacting students and delivery directly. There are some employees who are quite consistent in taking leaves and I am seeing a trend there. While I and your managers are keeping a Ken eye, I would like all employees to focus on work and ensure that leaves are only taken exceptionally and only in dire need. Saturdays especially is an extremely busy day and untimely leaves on such days really impact retail business and puts more pressure on a lot of other employees.
    
    Regards 
    Shekhar "
      />
      <AnnouncementModal
        title="Employee Verification"
        content="Hi Team,


I am writing to confirm that HR will only be able to provide verification of your employment with our organization. If you are not serving your notice period then we will not issue your offer letter & Relieving letter &  provident fund documents.

It is not appropriate for an employee to use a fake name when providing a reference for a job or other professional opportunity. This is because providing false or misleading information on a reference or application can be considered fraudulent or deceptive, and could potentially have legal consequences.

Please be advised that the terms of your appointment letter, including the notice period requirement, still apply. If you have any questions or concerns about the terms of your appointment letter, please don't hesitate to contact HR."
      />
    </div>
  );
};

export default Announcement;
