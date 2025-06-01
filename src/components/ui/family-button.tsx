import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@heroui/react"
import {Icon} from "@iconify/react"
import {button} from "@heroui/theme"

const CONTAINER_SIZE = 200

interface FamilyButtonProps {
  children: React.ReactNode
}

const FamilyButton: React.FC<FamilyButtonProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div
      className={cn(
        "rounded-[24px] border border-default-300  shadow-sm",
        "bg-gradient-to-b from-default-100 to-background",
        isExpanded
          ? "w-[204px]"
          : ""
      )}
    >
      <div className="rounded-[23px] border   border-black/10">
        <div className="rounded-[22px] border  border-default-100">
          <div className="rounded-[21px] border    border-neutral-950/20   flex items-center justify-center ">
            <FamilyButtonContainer
              isExpanded={isExpanded}
              toggleExpand={toggleExpand}
            >
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                >
                  {children}
                </motion.div>
              ) : null}
            </FamilyButtonContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

// A container that wraps content and handles animations
interface FamilyButtonContainerProps {
  isExpanded: boolean
  toggleExpand: () => void
  children: ReactNode
}

const FamilyButtonContainer: FC<FamilyButtonContainerProps> = ({
  isExpanded,
  toggleExpand,
  children,
}) => {
  return (
    <motion.div
      className={cn(
        "relative   border-white/10 border shadow-lg flex flex-col space-y-1  items-center  text-foreground  cursor-pointer z-10",
        !isExpanded
          ? "bg-gradient-to-b from-default-100 to-default-50"
          : ""
      )}
      layoutRoot
      layout
      initial={{ borderRadius: 21, width: "4rem", height: "4rem" }}
      animate={
        isExpanded
          ? { borderRadius: 20, width: CONTAINER_SIZE, height: CONTAINER_SIZE + 50, transition: { type: "spring", damping: 25, stiffness: 400, when: "beforeChildren" } }
          : { borderRadius: 21, width: "4rem", height: "4rem" }
      }
    >
      {children}

      <motion.div
        className="absolute  "
        initial={{ x: "-50%" }}
        animate={{
          x: isExpanded ? "0%" : "-50%",
          transition: { type: "tween", ease: "easeOut", duration: 0.3 },
        }}
        style={{ left: isExpanded ? "" : "50%", bottom: 6 }}
      >
        {isExpanded ? (
          <motion.div
            className = {cn('group', button({variant: 'flat', color : 'danger' , isIconOnly: true, size : 'lg'}))}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={false}
            animate={{ rotate: -360, transition: { duration: 0.4 } }}
          >
            <Icon 
              icon = 'lucide:x'
              className='size-7'
            />
          </motion.div>
        ) : (
          <motion.div
            className={cn(
                'group', button({variant: "shadow", color: 'primary', isIconOnly: true, size: 'lg'})
            )}
            style={{ borderRadius: 24 }}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={{ rotate: 180 }}
            animate={{
              rotate: -180,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <Icon icon = 'lucide:plus' className="size-7" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export { FamilyButton }
