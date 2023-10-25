import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
const Calendar = (props) => {
    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 4;

        return contributions.filter((activity) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();
            console.log(date);
            return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
        });
    };

    return (
        <CalendarCustom
            // 깃허브 계정
            username={props.githubId}
            // 사이즈 조정
            blockSize={40}
            transformData={selectLastHalfYear}
            style={{}}
            hideTotalCount={true}
            hideMonthLabels={true}
            hideColorLegend={true}
        />
    );
};

export default Calendar;

const CalendarCustom = styled(GitHubCalendar)``;
