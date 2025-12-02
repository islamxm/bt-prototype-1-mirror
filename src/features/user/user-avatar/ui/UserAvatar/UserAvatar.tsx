import { Avatar, User } from "@/entities/user";
import { motion } from "motion/react";
import { useSelector } from "@/shared/lib";

export const UserAvatar = () => {
  const {isAuth} = useSelector(s => s.user)

  if (!isAuth) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Avatar size="4.8rem"/>
    </motion.div>
  );
};
