package space.qmen.lot.test;

import space.qmen.lot.utils.timeUtils.DateUtil;

public class DateUtilTest {
    public static void main(String[] args) {
        int days = DateUtil.getDayOfMonth(2012,2);
        System.out.println(days);
    }
}