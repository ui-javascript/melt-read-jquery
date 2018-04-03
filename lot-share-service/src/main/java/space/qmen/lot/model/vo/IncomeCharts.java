package space.qmen.lot.model.vo;

import lombok.Data;
import space.qmen.lot.model.param.WalletParam;
import space.qmen.lot.utils.timeUtils.DateUtil;

@Data
public class IncomeCharts {
    private int[] dayList;
    private double[] incomeList;

    public IncomeCharts (WalletParam walletParam) {
        int year = walletParam.getWalletYear();
        int month = walletParam.getWalletMonth();

        int days = DateUtil.getDayOfMonth(year, month);
        int[] daysIndexArr = new int[days];

        // 初始化日期下标
        for (int i=0;i<days;i++) {
            daysIndexArr[i] = i+1;
        }
        this.setDayList(daysIndexArr);

        // 初始化收益
        this.setIncomeList(new double[days]);
    }
}