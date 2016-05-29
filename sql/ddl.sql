CREATE TABLE `lottery` (
  `lottery_id` int(11) NOT NULL,
  `lottery_txt` varchar(2000) NOT NULL,
  `lottery_left_a_percentage` decimal(10,2) NOT NULL,
  `lottery_left_a_min_amt` decimal(10,2) NOT NULL,
  `lottery_left_a_max_amt` decimal(10,2) NOT NULL,
  `lottery_left_b_percentage` decimal(10,2) NOT NULL,
  `lottery_left_b_min_amt` decimal(10,2) NOT NULL,
  `lottery_left_b_max_amt` decimal(10,2) NOT NULL,
  `lottery_right_percentage` decimal(10,2) NOT NULL,
  `lottery_right_min_amt` decimal(10,2) NOT NULL,
  `lottery_right_max_amt` decimal(10,2) NOT NULL,
  PRIMARY KEY (`lottery_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

