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
            return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
        });
    };

    return (
        <Wrapper>
            <CalendarCustom
                // 깃허브 계정
                username={props.githubId}
                // 사이즈 조정
                blockSize={20}
                transformData={selectLastHalfYear}
                style={{}}
                hideTotalCount={true}
                hideMonthLabels={true}
                hideColorLegend={true}
            />
        </Wrapper>
    );
};

export default Calendar;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
    border-radius: 16px;
    background-color: #efe4e4;
`;

const CalendarCustom = styled(GitHubCalendar)`
    width: 100%;
`;
