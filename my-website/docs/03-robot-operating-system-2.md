---
sidebar_position: 3
---

# Robot Operating System 2

The Robot Operating System (ROS) is a set of software libraries and tools that help you build robot applications. It is not an operating system in the traditional sense, but rather a flexible framework for writing robot software. ROS 2 is the second generation of ROS, and it is designed to be more robust, secure, and scalable than its predecessor.

## What is ROS 2?

ROS 2 is a complete rewrite of ROS 1, and it is designed to address some of the limitations of the original framework. Some of the key goals of ROS 2 are:

*   **Multi-robot support:** ROS 2 is designed to make it easier to build and manage systems with multiple robots.
*   **Real-time support:** ROS 2 provides better support for real-time applications, which is critical for many robotics tasks.
*   **Improved security:** ROS 2 includes a number of security features that are not available in ROS 1.
*   **Cross-platform support:** ROS 2 is designed to be cross-platform, and it can be used on Linux, macOS, and Windows.

## Core Concepts of ROS 2

ROS 2 is based on a number of core concepts that are essential to understand before you can start building robot applications.

*   **Nodes:** A node is a process that performs some computation. In ROS 2, every program is a node.
*   **Topics:** A topic is a named bus over which nodes can exchange messages. Topics are used for asynchronous, one-to-many communication.
*   **Services:** A service is a request-response mechanism for synchronous, one-to-one communication.
*   **Actions:** An action is a long-running task that provides feedback and can be preempted.

## The ROS 2 Communication System

ROS 2 uses the Data Distribution Service (DDS) standard for its communication system. DDS is a middleware standard that is designed for real-time, scalable, and secure communication. By using DDS, ROS 2 is able to provide a number of features that are not available in ROS 1, such as quality of service (QoS) settings and automatic discovery of nodes.

## ROS 2 Tools

ROS 2 comes with a number of command-line tools that are essential for developing and debugging robot applications. Some of the most common tools include:

*   `ros2 run`: This tool is used to run a node from a package.
*   `ros2 topic`: This tool is used to inspect and interact with topics.
*   `ros2 node`: This tool is used to inspect and interact with nodes.
*   `rqt`: This tool is a graphical user interface (GUI) that can be used to visualize and debug ROS 2 applications.

## Creating a ROS 2 Workspace

Before you can start building ROS 2 applications, you need to create a workspace. A workspace is a directory that contains your ROS 2 packages. To create a workspace, you can use the following commands:

```bash
mkdir -p ros2_ws/src
cd ros2_ws
colcon build
```

## Writing a Simple Publisher and Subscriber

To illustrate the core concepts of ROS 2, let's create a simple publisher and subscriber. The publisher will publish a message on a topic, and the subscriber will receive the message and print it to the console.

### Python Publisher

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello, ROS 2! %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### C++ Publisher

```cpp
#include <rclcpp/rclcpp.hpp>
#include <std_msgs/msg/string.hpp>

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  auto node = rclcpp::Node::make_shared("minimal_publisher");
  auto publisher = node->create_publisher<std_msgs::msg::String>("topic", 10);
  std_msgs::msg::String message;
  message.data = "Hello, ROS 2!";
  publisher->publish(message);
  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

To run the publisher, you can use the following command:

```bash
ros2 run <package_name> minimal_publisher
```

## ROS 1 vs. ROS 2

ROS 2 is a significant improvement over ROS 1, and it is the recommended version for new robot applications. Some of the key differences between ROS 1 and ROS 2 are:

*   **Communication:** ROS 2 uses DDS for its communication system, while ROS 1 uses a custom TCP-based protocol.
*   **Build System:** ROS 2 uses `colcon` as its build system, while ROS 1 uses `catkin`.
*   **Python API:** The Python API in ROS 2 is more Pythonic than the API in ROS 1.
*   **Launch System:** The launch system in ROS 2 is more flexible and powerful than the launch system in ROS 1.

By understanding the key concepts and tools of ROS 2, you will be well on your way to building your own robot applications.